from django.shortcuts import render
from rest_framework import status
from .serializers import *
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

class LoginAPI(APIView):
    print("auth/login")
    def post(self,request):
        try:
            data =request.data
            serializer=UserCreateSerializer(data=data)
            if serializer.is_valid():
                email=serializer.data['email']
                password=serializer.data['password']
                user=authenticate(email=email,password=password)
                if user is None:
                    return Response({
                    'status':400,
                    'message':"Password or Email invalid",
                    'data':serializer.error
                    }, status=status.HTTP_400_BAD_REQUEST)
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }, status=status.HTTP_200_OK)
            return Response({
                'status':400,
                'message':"Data not Matching",
                'data':serializer.error
            },status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            print (e)
            return Response({
                'status': 500,
                'message': 'Internal Server Error',
                'data': None
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


