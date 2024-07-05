from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

app_name = 'qna'

from django.urls import path
from . import views

urlpatterns = [
    path('questions/create/', create_question, name='create_question'),
    path('questions/delete/<int:question_id>/', delete_question, name='delete_question'),
    path('questions/answer/create/', create_answer, name='create_answer'),
    path('', get_questions, name='get_questions'),
]
