from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = 'goals'

urlpatterns = [
    path('my_goals/', views.list_goals, name='list_goals'),
    path('my_goals/posts', views.add_goal, name='add_goal'),
    path('detail/<int:goal_id>/', views.goal_detail, name='goal_detail'),
    path('shop_add/', views.add_shop_goal, name='add_shop_goal'),
    path('shop_list/', views.list_shop_goals, name='list_shop_goals'),
]