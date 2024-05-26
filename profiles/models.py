from django.db import models
from django.conf import settings
from django.utils.timezone import now
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model


class Profile(models.Model):
    """
    A model representing a user profile, extending
    the default user model with additional data.
    """
    owner = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='profile'
    )
    created_at = models.DateTimeField(default=now)
    name = models.CharField(max_length=100, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} Profile of {self.owner.username}"


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_user_profile(sender, instance, created, **kwargs):
    """
    A signal receiver that creates a profile for each
    new user upon user creation.
    """
    if created:
        Profile.objects.create(owner=instance)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def save_user_profile(sender, instance, **kwargs):
    """
    A signal receiver that saves the profile associated
    with the user when the user is saved.
    """
    instance.profile.save()
