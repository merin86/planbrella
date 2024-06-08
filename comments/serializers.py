from rest_framework import serializers
from .models import Comment
from django.contrib.auth import get_user_model

User = get_user_model()


class CommentSerializer(serializers.ModelSerializer):
    """
    Serializer for Comment model that handles serialization
    and deserialization of Comment data. It also provides
    read-only fields for owner username and profile ID.
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(
        source='owner.profile.id', default=None
    )

    def get_is_owner(self, obj):
        request = self.context['request']
        return obj.owner == request.user

    class Meta:
        model = Comment
        fields = [
            'id', 'task', 'owner', 'is_owner', 'profile_id',
            'text', 'created_at', 'updated_at'
        ]
        read_only_fields = ('created_at', 'updated_at')


class CommentUpdateSerializer(serializers.ModelSerializer):
    """
    Serializer for updating comments.
    """
    class Meta:
        model = Comment
        fields = ['text']


class CommentDetailSerializer(CommentSerializer):
    """
    A detailed serializer for the Comment model extending the basic
    CommentSerializer with a specific task ID field for more
    detailed view endpoints.
    """
    task_id = serializers.ReadOnlyField(source='task.id')
