from django.contrib import admin
from .models import Comment


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    """
    Admin interface for managing Comment instances
    within the Django admin panel.
    """
    list_display = ['task', 'owner', 'created_at']
    list_filter = ['created_at', 'owner']

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        queryset = queryset.select_related('owner', 'task')
        return queryset
