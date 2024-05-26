from django.http import Http404
from django.contrib.auth import get_user_model
from rest_framework import generics, permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Profile
from .serializers import ProfileSerializer, UserSearchSerializer
from planbrella_api.permissions import IsOwnerOrReadOnly

User = get_user_model()


class ProfileList(APIView):
    """
    List all profiles. Profiles are created
    automatically when a user is registered.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        profiles = Profile.objects.all()
        serializer = ProfileSerializer(
            profiles,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)


class ProfileDetail(APIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    """
    Retrieve, update, or delete a profile instance.
    """
    def get_object(self, pk):
        try:
            profile = Profile.objects.get(pk=pk)
            self.check_object_permissions(self.request, profile)
            return profile
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(profile, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        profile = self.get_object(pk)
        serializer = ProfileSerializer(
            profile,
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        profile = self.get_object(pk)
        profile.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserSearchAPIView(generics.ListAPIView):
    """
    API view for searching users by their username.
    This view supports filtering the queryset by
    username passed as a query parameter.
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSearchSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        queryset = super().get_queryset()
        username = self.request.query_params.get('username', None)
        if username:
            queryset = queryset.filter(username__icontains=username)
        return queryset
