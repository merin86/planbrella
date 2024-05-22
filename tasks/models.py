from django.db import models
from django.conf import settings
from django.utils.timezone import now

class Task(models.Model):
    STATE_CHOICES = (
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('done', 'Done'),
    )
    PRIORITY_CHOICES = (
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    )
    CATEGORY_CHOICES = (
        ('work', 'Work'),
        ('private', 'Private'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    due_date = models.DateTimeField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='owned_tasks', on_delete=models.CASCADE)
    task_owners = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='assigned_tasks', blank=True)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='low')
    state = models.CharField(max_length=15, choices=STATE_CHOICES, default='open')
    category = models.CharField(max_length=10, choices=CATEGORY_CHOICES, default='work')

    class Meta:
        ordering = ['-due_date', 'created_at']
    
    def is_overdue(self):
        return now() > self.due_date if self.due_date else False

    def __str__(self):
        return self.title
