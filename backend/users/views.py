from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework import generics
from .models import User
from .serializers import UserSerializer, UserBasicSerializer
from .permissions import IsAdminOrReadOnly, IsFacultyOrReadOnly
from django.contrib.auth import authenticate, logout
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.views import ObtainAuthToken 
from rest_framework import status
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes, force_str  # Change here
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.core.mail import send_mail


class LoginAPIView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data['username']
        password = serializer.validated_data['password']
        user = authenticate(username=username, password=password)
        if user:
            token, created = Token.objects.get_or_create(user=user)
            user_serializer = UserBasicSerializer(user).data
            return Response({'token': token.key, 'user': user_serializer})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request) 
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)


class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def create(self, request, *args, **kwargs):
        data = request.data
        user = authenticate(username=data['username'], password=data['password'])
        if user:
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_header(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)


class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]


class BulkUserCreateAPIView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated, IsAdminOrReadOnly]

    def post(self, request, *args, **kwargs):
        user_data = request.data
        if not isinstance(user_data, list):
            return Response(
                {"error": "Expecting a list of users data."},
                status=status.HTTP_400_BAD_REQUEST
            )

        created_users = []
        for data in user_data:
            user = authenticate(username=data['username'], password=data['password'])
            if user: 
                serializer = UserSerializer(data=data)
                serializer.is_valid(raise_exception=True)
                user = serializer.save()
                created_users.append(user)
            else:
                return Response({'error': 'Invalid password for some users'}, status=status.HTTP_400_BAD_REQUEST)

        return Response(
            UserSerializer(created_users, many=True).data,
            status=status.HTTP_201_CREATED
        )



# views.py


class RequestPasswordResetAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')

        try:
            user = User.objects.get(username=email)  # Use get() to retrieve a single user
        except User.DoesNotExist:
            return Response({'error': 'User with this email does not exist'}, status=status.HTTP_400_BAD_REQUEST)

        # Generate a unique token for password reset
        token = default_token_generator.make_token(user)

        # Construct the password reset link
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        password_reset_link = f"http://localhost:3000/reset-password/{uid}/{token}/"

        # Send password reset email
        send_mail(
            'Password Reset',
            f'Click the link to reset your password: {password_reset_link}',
            'from@example.com',
            [email],
            fail_silently=False,
        )

        return Response({'message': 'Password reset link sent successfully'}, status=status.HTTP_200_OK)


class ResetPasswordAPIView(APIView):
    def post(self, request, uidb64, token):
        # Decode uid and get the user
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            # Token is valid, reset password
            new_password = request.data.get('password')
            if new_password:
                user.set_password(new_password)
                user.save()
                return Response({'message': 'Password reset successfully'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'New password is required'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Invalid token or user'}, status=status.HTTP_400_BAD_REQUEST)
