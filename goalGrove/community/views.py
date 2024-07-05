from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
User = get_user_model()

@login_required
def community_view(request):
    user = request.user
    context = {
        'user_name': user.username,
        'user_email': user.email,
    }
    return render(request, 'community/community.html', context)