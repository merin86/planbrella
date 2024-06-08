from django.contrib import admin
from .models import Task


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """
    Admin interface for managing Task instances
    within the Django admin panel.
    """
    list_display = ('title', 'owner', 'due_date')
    search_fields = ('title', 'description')
