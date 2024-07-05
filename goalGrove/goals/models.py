from django.db import models
from users.models import User
import os
from uuid import uuid4
from django.utils import timezone

def upload_filepath(instance, filename):
    today_str = timezone.now().strftime("%Y%m%d")
    file_basename = os.path.basename(filename)
    return f'{instance._meta.model_name}/{today_str}/{str(uuid4())}_{file_basename}'

class GCategory(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.name}'

class Goal(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="goals")
    category = models.ManyToManyField(to=GCategory, through="GoalCategory", related_name="goals")
    like = models.ManyToManyField(to=User, through="GoalLike", related_name="liked_goal")
    image = models.ImageField(upload_to=upload_filepath, blank=True)

    def __str__(self):
        return f'[{self.id}] {self.title}'

class GoalCategory(models.Model):
    category = models.ForeignKey(to=GCategory, on_delete=models.PROTECT, related_name="categories_goalcategory")
    post = models.ForeignKey(to=Goal, on_delete=models.CASCADE, related_name="goals_goalcategory")

class GoalLike(models.Model):
    post = models.ForeignKey(to=Goal, on_delete=models.CASCADE, related_name="goal_likes")
    user = models.ForeignKey(to=User, on_delete=models.CASCADE, related_name="user_goal_likes")