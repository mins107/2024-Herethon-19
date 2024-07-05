from django.shortcuts import get_object_or_404, render, redirect
from django.http import JsonResponse, HttpResponseBadRequest
from django.contrib.auth.decorators import login_required
from .models import Question, Answer
from django.contrib import messages
from django.contrib.auth.models import User

@login_required
def create_question(request): #qna만들기
    if request.method == 'POST':
        user = request.user  # 로그인된 사용자
        title = request.POST['title'] # 제목
        content = request.POST['content'] # 내용
        question = Question.objects.create(user=user, title=title, content=content)
        return JsonResponse({'id': question.id})
    return render(request, 'qna/create_question.html')

@login_required
def delete_question(request, question_id):
    question = get_object_or_404(Question, id=question_id)
    user = request.user  # 로그인된 사용자
    
    # 작성자인지 확인
    if user != question.user:
        return JsonResponse({'result': 'unauthorized'}, status=403)
    
    if request.method == 'POST':
        question.delete()
        messages.success(request, '질문이 성공적으로 삭제되었습니다.')
        return redirect('get_questions')
    
    return render(request, 'qna/delete_question.html', {'question': question})

@login_required
def create_answer(request):
    if request.method == 'POST':
        user = request.user  # 로그인된 사용자
        question_id = request.POST['question_id']
        content = request.POST['content']
        question = get_object_or_404(Question, id=question_id)
        if user != question.user:
            return JsonResponse({'result': 'unauthorized'}, status=403)
        
        answer = Answer.objects.create(user=user, question=question, content=content)
        return JsonResponse({'id': answer.id})
    return render(request, 'qna/create_answer.html')

def get_questions(request):
    questions = Question.objects.all()
    return render(request, 'qna/get_questions.html', {'questions': questions})
