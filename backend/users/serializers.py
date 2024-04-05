from rest_framework import serializers
from .models import User
from it_academics.models import Faculty
from django.utils.crypto import get_random_string
from django.core.mail import send_mail 
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    is_active = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'username', 'role', 'first_name', 'last_name', 'is_active']
        extra_kwargs = {'password': {'write_only': True}}

    def get_is_active(self, user):
        return Token.objects.filter(user=user).exists()

    def create(self, validated_data):
        department = validated_data.pop('department', 'Information Technology')
        first_name = validated_data.pop('first_name', '')
        last_name = validated_data.pop('last_name', '')

        password = get_random_string(length=10)

        user = User.objects.create_user(password=password, **validated_data) 
        user.first_name = first_name  
        user.last_name = last_name    
        user.save() 

        faculty = Faculty.objects.create(
            user_id=user,
            department=department,
            first_name=first_name, 
            last_name=last_name,
        )

        self.send_message(user, password)

        return user
    
    def send_message(self, user, password):
        subject = 'Account Created on Information Technology Department Website'
        message = f'Welcome {user.first_name},\n\nYour account has been successfully created on the Information Technology Department Website.\n\n' \
                  f'Your username: {user.username}\nYour password: {password}\n\n' \
                  f'Please login to the website and reset your password.\n\n' \
                  f'Thank you for joining us!\n\n' \
                  f'Best Regards\n' \
                  f'Admin - IT'
                  
                  
        from_email = 'techteam.it.nitsri@gmail.com'  
        to_email = user.username
        send_mail(subject, message, from_email, [to_email])
    
class UserBasicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'username', 'role']


