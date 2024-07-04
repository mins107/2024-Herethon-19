from django.urls import path
from .views import *

app_name = 'users'

urlpatterns = [
    path('signup/', signup_view, name='signup'),
    path('pwverification/', pwverification_view, name='pwverification'),
    path('pwreset/', pwreset_view, name='pwreset'),
]