from django.contrib import admin
from .models import Group


@admin.register(Group)
class GroupAdmin(admin.ModelAdmin):
    """
    Admin interface for managing Group instances
    within the Django admin panel.
    """
    list_display = ('task', 'group_size', 'description')
    search_fields = ('description',)
