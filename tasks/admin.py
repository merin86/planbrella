from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    """
    Admin interface for managing Tasks instances
    within the Django admin panel.
    """
    list_display = ('title', 'owner', 'due_date', 'state')
    list_filter = ('state', 'priority', 'category')
    search_fields = ('title', 'description')
