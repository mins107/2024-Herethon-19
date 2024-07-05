from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'community'

urlpatterns = [
    path('', community_view, name='community'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)