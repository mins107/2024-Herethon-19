from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'posts'

urlpatterns = [
    path('create/', create_post, name='create_post'),
    path('', post_list, name='post_list'),
]