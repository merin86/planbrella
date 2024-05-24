from rest_framework import serializers
from .models import Comment
from django.contrib.auth import get_user_model

User = get_user_model()

class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='user.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='user.profile.id', default=None)

    def get_is_owner(self, obj):
        request = self.context['request']
        return obj.user == request.user

    class Meta:
        model = Comment
        fields = [
            'id', 'task', 'owner', 'is_owner', 'profile_id',
            'text', 'created_at', 'updated_at'
        ]
        read_only_fields = ('created_at', 'updated_at')
