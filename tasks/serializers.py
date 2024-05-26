from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    """
    Serializer for the Task model, transforming Task data
    for easy rendering into JSON, and handling incoming JSON
    to validate and convert it to Task data types.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    is_overdue = serializers.SerializerMethodField()

    class Meta:
        model = Task
        fields = [
            'id', 'title', 'description', 'owner', 'profile_id',
            'created_at', 'due_date', 'is_overdue', 'is_owner'
        ]
        read_only_fields = (
            'created_at', 'is_overdue', 'owner',
            'profile_id', 'is_owner'
        )

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_is_overdue(self, obj):
        return obj.is_overdue()
