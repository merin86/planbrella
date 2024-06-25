from rest_framework import serializers
from .models import Group

class GroupSerializer(serializers.ModelSerializer):
    """
    Serializer for the Group model, transforming Group data
    for easy rendering into JSON, and handling incoming JSON
    to validate and convert it to Group data types.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    task_title = serializers.ReadOnlyField(source='task.title')

    class Meta:
        model = Group
        fields = [
            'id', 'task', 'task_title', 'owner', 'group_size', 'description',
            'created_at', 'updated_at', 'is_owner'
        ]
        read_only_fields = (
            'created_at', 'updated_at', 'owner',
            'task_title', 'is_owner'
        )

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
