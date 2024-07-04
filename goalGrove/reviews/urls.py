from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'reviews'

urlpatterns = [
    path('create/', create_review, name='create_review'),
    path('delete/<int:review_id>/', delete_review, name='delete_review'),
    path('like/<int:review_id>/', like_review, name='like_review'),
    path('dislike/<int:review_id>/', dislike_review, name='dislike_review'),
    path('<int:review_id>/', get_reviews, name='get_reviews'),
]
