from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'posts'

urlpatterns = [
    path('create/', create_post, name='create_post'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)