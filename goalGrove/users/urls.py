from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'users'

urlpatterns = [
    path('signup/', signup_view, name='signup'),
]