from rest_framework import serializers
from .models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    created_at = serializers.ReadOnlyField()
    
    class Meta:
        model = Profile
        fields = ['id', 'owner', 'created_at', 'name', 'description']
