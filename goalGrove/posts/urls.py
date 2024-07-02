from django.urls import path
from . import views
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'posts'

urlpatterns = [
    path('create/', views.create_post, name='create_post'),
    path('', views.post_list, name='post_list'),
]