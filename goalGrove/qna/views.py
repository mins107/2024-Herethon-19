from django.shortcuts import get_object_or_404, render, redirect
from django.http import JsonResponse, HttpResponseBadRequest
from .models import Question, Answer
from django.contrib.auth.models import User

def create_question(request):
    if request.method == 'POST':
        user = User.objects.first()  # 기본 사용자 또는 익명 사용자 할당
        title = request.POST['title'] # 제목
        content = request.POST['content'] #내용
        question = Question.objects.create(user=user, title=title, content=content)
        return JsonResponse({'id': question.id})
    return render(request, 'qna/create_question.html')

def delete_question(request, question_id):
    question = get_object_or_404(Question, id=question_id)
    user = User.objects.first()  # 기본 사용자 또는 익명 사용자 할당
    if user == question.user:
        question.delete()
        return render(request, 'qna/delete_question.html')
    else:
        return JsonResponse({'result': 'unauthorized'}, status=403)

def create_answer(request):
    if request.method == 'POST':
        user = User.objects.first()  # 기본 사용자 또는 익명 사용자 할당
        question_id = request.POST['question_id']
        content = request.POST['content']
        question = get_object_or_404(Question, id=question_id)
        answer = Answer.objects.create(user=user, question=question, content=content)
        return JsonResponse({'id': answer.id})
    return render(request, 'qna/create_answer.html')

def get_questions(request):
    questions = Question.objects.all()
    return render(request, 'qna/get_questions.html', {'questions': questions})
