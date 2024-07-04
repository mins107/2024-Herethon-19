from django.db import models
from django.utils import timezone
from datetime import timedelta

class Category(models.Model):
    CATEGORY_CHOICES = [
        ('운동', '운동'),
        ('식단', '식단'),
        ('공부', '공부'),
        ('취미', '취미'),
        ('자기계발', '자기계발'),
    ]
    
    name = models.CharField(max_length=100, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name

class Post(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name='posts') #user.User의 FK, User객체가 사라지면 POST도 사라짐
    title = models.CharField(max_length=200) #제목
    date = models.DateField() #게시물 작성 날짜
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True) 
    content = models.TextField() #내용
    entry_number = models.PositiveIntegerField(null=True)

    def __str__(self):
        return f"{self.title} (Entry {self.entry_number})"

    def save(self, *args, **kwargs):
        if not self.pk:  # 새로운 객체를 저장할 때 해당 사용자가 작성한 마지막 게시물을 조회
            last_entry = Post.objects.filter(user=self.user).order_by('entry_number').last()
            self.entry_number = last_entry.entry_number + 1 if last_entry else 1

        super().save(*args, **kwargs)
