from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate, login as auth_login
from .forms import SignUpForm

def signup_view(request):
    if request.method == "GET":
        form = SignUpForm()
        return render(request, 'users/signup.html', {'form': form})
    
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        messages.success(request, '회원가입이 완료되었습니다.')
        return redirect('login')
    
    return render(request, 'users/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)
            return redirect('main')  # 로그인 후 이동할 페이지
        else:
            if not username or not password:
                error_message = "아이디와 비밀번호를 모두 입력하세요."
            else:
                error_message = "아이디 또는 비밀번호가 올바르지 않습니다."
            return render(request, 'users/login.html', {'error_message': error_message})
    else:
        return render(request, 'users/login.html')