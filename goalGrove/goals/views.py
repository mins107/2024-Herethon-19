from django.shortcuts import render

# Create your views here.
# goals/views.py
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Goal, ShopGoal
from django.views.decorators.http import require_POST, require_GET

@require_POST
def add_goal(request):
    user = request.user
    title = request.POST.get('title')
    description = request.POST.get('description', '')
    goal = Goal.objects.create(user=user, title=title, description=description)
    return JsonResponse({'id': goal.id, 'title': goal.title, 'description': goal.description})

@require_GET
def list_goals(request):
    user = request.user
    goals = Goal.objects.filter(user=user)
    goals_data = [{'id': goal.id, 'title': goal.title, 'description': goal.description} for goal in goals]
    return JsonResponse(goals_data, safe=False)

@require_GET
def goal_detail(request, goal_id):
    goal = get_object_or_404(Goal, id=goal_id, user=request.user)
    goal_data = {'id': goal.id, 'title': goal.title, 'description': goal.description}
    return JsonResponse(goal_data)
