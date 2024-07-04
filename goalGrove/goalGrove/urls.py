from django.contrib import admin
from django.urls import path, include
from users.views import login_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', login_view, name='login'),
    path('users/', include('users.urls')),
    path('posts/', include('posts.urls')),
<<<<<<< HEAD
    path('reviews/', include('reviews.urls')),
    path('qna/', include('qna.urls')),
]
=======
]
>>>>>>> 5adb44ea1eaee2d84465a83a720607fd4b77ff44
