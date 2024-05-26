from dj_rest_auth.serializers import UserDetailsSerializer
from rest_framework import serializers


class CurrentUserSerializer(UserDetailsSerializer):
    """
    Serializer for extending UserDetailsSerializer with
    additional profile information.
    Adds the profile ID to the user details to enable frontend
    applications to easily access user-specific profile data
    without additional requests.
    """
    profile_id = serializers.ReadOnlyField(source='profile.id')

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('profile_id',)
