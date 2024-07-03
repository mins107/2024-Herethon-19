from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.models import User
from .models import Post
from .forms import PostForm
from django.contrib import messages

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.user = User.objects.first()  # 임시
            post.save()
            return redirect('post_list')
    else:
        form = PostForm()
    return render(request, 'posts/create_post.html', {'form': form})

def post_list(request):
    if request.method == "GET":
        form = PostForm()
        return render(request, 'posts/post_list.html', {'form': form})
    
    form = PostForm(request.POST)
    if form.is_valid():
        user = form.save()
        messages.success(request, '완료')
        return redirect('post_list')
    
    return render(request, 'posts/post_list.html', {'form': form})


#def post_list(request):
#    posts = Post.objects.all()
#    return render(request, 'posts/post_list.html', {'posts': posts})
