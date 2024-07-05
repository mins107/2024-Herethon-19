from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import GCategory
from posts.models import Category

@receiver(post_save, sender=Category)
def create_or_update_gcategory(sender, instance, created, **kwargs):
    if created:
        GCategory.objects.create(name=instance.name)
    else:
        gcategory = GCategory.objects.filter(name=instance.name).first()
        if gcategory:
            gcategory.name = instance.name
            gcategory.save()

@receiver(post_delete, sender=Category)
def delete_gcategory(sender, instance, **kwargs):
    gcategory = GCategory.objects.filter(name=instance.name).first()
    if gcategory:
        gcategory.delete()