from django.contrib import admin
from django.urls import path, include
from users.views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_view, name='login'),
    path('users/', include('users.urls')),
    path('posts/', include('posts.urls')),
]