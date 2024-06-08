from django.db import models
from django.conf import settings
from django.utils.timezone import now


class Task(models.Model):
    """
    Represents a task in the system.
    """
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    due_date = models.DateTimeField()
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='owned_tasks',
        on_delete=models.CASCADE
    )

    class Meta:
        ordering = ['-due_date', 'created_at']

    def is_overdue(self):
        """
        Determines if the task is overdue based on the
        current date and the due date.
        """
        return now() > self.due_date if self.due_date else False

    def __str__(self):
        return self.title
