from django.urls import path
from .views import *
from django.contrib.auth.views import LogoutView

app_name = 'users'

urlpatterns = [
    path('main/', main_view, name='main'),
    path('shop/', shop_view, name='shop'),
    path('signup/', signup_view, name='signup'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('pwverification/', pwverification_view, name='pwverification'),
    path('pwreset/', pwreset_view, name='pwreset'),
]