# goals/urls.py
from django.urls import path
from .views import *

app_name = 'goals'

urlpatterns = [
    path('detail/<int:goal_id>/', goal_detail, name='goal_detail'),
]
