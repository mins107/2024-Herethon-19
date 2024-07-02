from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, get_user_model
from django.http import HttpResponse
from .forms import SignUpForm

User = get_user_model()

def signup_view(request):
    if request.method == "GET":
        form = SignUpForm()
        return render(request, 'users/signup.html', {'form': form})
    
    form = SignUpForm(request.POST)
    if form.is_valid():
        user = form.save()
        messages.success(request, '회원가입이 완료되었습니다.')
        return redirect('users:login')
    
    return render(request, 'users/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)
            return redirect('main')
        else:
            error_message = "아이디 또는 비밀번호가 올바르지 않습니다."
            return render(request, 'users/login.html', {'error_message': error_message})
    else:
        return render(request, 'users/login.html')

def pwverification_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')

        if User.objects.filter(username=username, email=email).exists():
            return redirect('users:pwreset')
        else:
            return HttpResponse('아이디와 이메일이 일치하지 않습니다.', status=400)
    return render(request, 'users/pwverification.html')

def pwreset_view(request):
    if request.method == 'POST':
        new_password = request.POST.get('new_password')
        confirm_password = request.POST.get('confirm_password')

        if new_password != confirm_password:
            return HttpResponse('비밀번호가 일치하지 않습니다.', status=400)

        user = request.user
        user.set_password(new_password)
        user.save()
        return HttpResponse('success')
    
    return render(request, 'users/pwreset.html')
