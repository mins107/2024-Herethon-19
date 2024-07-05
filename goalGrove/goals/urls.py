from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'goals'

urlpatterns = [
    path('create/', create_goal, name='create_goal'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)