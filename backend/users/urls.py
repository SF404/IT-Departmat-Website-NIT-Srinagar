from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import LoginAPIView, LogoutAPIView, UserListCreateAPIView, UserRetrieveUpdateDestroyAPIView, BulkUserCreateAPIView, RequestPasswordResetAPIView, ResetPasswordAPIView

urlpatterns = [
    path('auth/login/', LoginAPIView.as_view(), name='login'),
    path('auth/logout/', LogoutAPIView.as_view(), name='logout'),
    path('auth/request-password-reset/', RequestPasswordResetAPIView.as_view(), name='request_password_reset'),
    path('auth/reset-password/<str:uidb64>/<str:token>/', ResetPasswordAPIView.as_view(), name='reset_password'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),
    path('users/', UserListCreateAPIView.as_view(), name='user-list-create'),
    path('users/<int:pk>/', UserRetrieveUpdateDestroyAPIView.as_view(), name='user-retrieve-update-destroy'),
    path('users/bulk-create/', BulkUserCreateAPIView.as_view(), name='bulk_create_users'),
    

]
