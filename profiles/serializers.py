from rest_framework import serializers
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    created_at = serializers.ReadOnlyField()
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner
    
    class Meta:
        model = Profile
        fields = ['id', 'owner', 'created_at', 'name', 'description', 'is_owner']

class UserSearchSerializer(serializers.ModelSerializer):
    """
    Serializer to be used for user search functionality. It includes only the necessary fields
    to identify and display basic information about users, which can be used to add them as task owners.
    """
    class Meta:
        model = User
        fields = ['id', 'username']
