from django.db import models
from django.conf import settings
from tasks.models import Task


class Group(models.Model):
    """
    Represents a group associated with a task in the system.
    """
    task = models.ForeignKey(
        Task,
        related_name='groups',
        on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='owned_groups',
        on_delete=models.CASCADE
    )
    group_size = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Group for {self.task.title} by {self.owner.username}"
