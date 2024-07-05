from django.shortcuts import render, redirect, get_object_or_404
from .models import Goal, GCategory
from django.contrib.auth.decorators import login_required

@login_required
def create_goal(request):
    categories = GCategory.objects.all()

    if request.method == "POST":
        title = request.POST.get('title')
        content = request.POST.get('content')
        frequency = request.POST.get('frequency')
        image = request.FILES.get('image')

        category_ids = request.POST.getlist('category')
        category_list = [get_object_or_404(GCategory, id = category_id) for category_id in category_ids]

        goal = Goal.objects.create(
            title = title,
            content = content,
            author = request.user,
            frequency = frequency,
            image = image,
        )

        for category in category_list:
            goal.category.add(category)

        return redirect('users:main')
    return render(request, 'goals/create_goal.html', {'goal': Goal(), 'categories': categories})
