from django.contrib import admin
from django.urls import path, include
from users.views import login_view
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_view, name='login'),
    path('users/', include('users.urls')),
    path('posts/', include('posts.urls')),
    path('reviews/', include('reviews.urls')),
    path('qna/', include('qna.urls')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
