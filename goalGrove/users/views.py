from django.shortcuts import render, redirect, get_object_or_404 
from django.contrib import messages
from django.contrib.auth import authenticate, login as auth_login, get_user_model
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from .forms import SignUpForm, ResetPasswordForm
from django.views.decorators.csrf import csrf_exempt
import json
from posts.models import Category, Post
from goals.models import GCategory, Goal
User = get_user_model()

@login_required
def main_view(request):
    user = request.user
    categories = Category.objects.all()
    category_id = request.GET.get('category')
    gcategories = GCategory.objects.all()
    gcategory_id = request.GET.get('gcategory')
    
    if category_id:
        category = get_object_or_404(Category, id = category_id)
        posts = category.posts.all().order_by('-id')
    else:
        posts = Post.objects.all().order_by('-id')

    if gcategory_id:
        gcategory = get_object_or_404(GCategory, id = gcategory_id)
        goals = gcategory.goals.all().order_by('-id')
    else:
        goals = Goal.objects.all().order_by('-id')

    context = {
        'user_name': user.username,
        'user_email': user.email,
        'categories': categories,
        'gcategories': gcategories,
        'posts': posts,
        'goals': goals,
    }  

    return render(request, 'users/main.html', context)

@login_required
def shop_view(request):
    user = request.user
    context = {
        'user_name': user.username,
        'user_email': user.email,
    }
    return render(request, 'users/shopping.html', context)

@login_required
def review_view(request):
    user = request.user
    context = {
        'user_name': user.username,
        'user_email': user.email,
    }
    return render(request, 'reviews/review.html', context)

@login_required
def qna_view(request):
    user = request.user
    context = {
        'user_name': user.username,
        'user_email': user.email,
    }
    return render(request, 'qna/qna.html', context)

def signup_view(request):
    if request.method == "GET":
        form = SignUpForm()
        return render(request, 'users/signup.html', {'form': form})
    
    elif request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            messages.success(request, '회원가입이 완료되었습니다.')
            return redirect('login')
        else:    # 회원가입 폼이 유효하지 않은 경우
            return render(request, 'users/signup.html', {'form': form})

    else:    # GET 또는 POST 요청 외의 다른 메소드는 처리하지 않음
        return render(request, 'users/signup.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            auth_login(request, user)
            return redirect('users:main')  # main 페이지로
        else:
            error_message = "아이디 또는 비밀번호가 올바르지 않습니다."
            return render(request, 'users/login.html', {'error_message': error_message})
    else:
        return render(request, 'users/login.html')

def pwverification_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')

        user = User.objects.filter(username=username, email=email).first()
        if user:
            request.session['reset_user_id'] = user.id  # 세션에 사용자 ID 저장
            return redirect('users:pwreset')
        else:
            return HttpResponse('아이디와 이메일이 일치하지 않습니다.', status=400)
    return render(request, 'users/pwverification.html')

def pwreset_view(request):
    user_id = request.session.get('reset_user_id')
    user = get_object_or_404(User, pk=user_id)

    if request.method == 'POST':
        form = ResetPasswordForm(request.POST)
        if form.is_valid():
            new_password = form.cleaned_data['new_password']

            # 비밀번호 변경
            user.set_password(new_password)
            user.save()

            # 세션 초기화
            del request.session['reset_user_id']

            messages.success(request, '비밀번호가 성공적으로 변경되었습니다.')
            return redirect('users:login')
        else:
            # 폼이 유효하지 않은 경우
            return render(request, 'users/pwreset.html', {'form': form})
    else:
        form = ResetPasswordForm()
        return render(request, 'users/pwreset.html', {'form': form})
