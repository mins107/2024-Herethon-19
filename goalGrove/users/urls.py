from django.urls import path
from .views import *

app_name = 'users'

urlpatterns = [
    path('main/', main_view, name='main'),
    path('shop/', shop_view, name='shop'),
    path('signup/', signup_view, name='signup'),
    path('pwverification/', pwverification_view, name='pwverification'),
    path('pwreset/', pwreset_view, name='pwreset'),
]