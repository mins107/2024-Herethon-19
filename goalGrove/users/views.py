from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as auth_login
from .forms import SignUpForm

def signup_view(request):
    if request.method == "GET":
        form = SignUpForm()
        return render(request, 'users/signup.html', {'form': form})
    
    form = SignUpForm(request.POST)
    if form.is_valid():
        form.save()
        return redirect('users:login')
    
    return render(request, 'users/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)
            return redirect('home')  # 로그인 후 이동할 페이지
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})