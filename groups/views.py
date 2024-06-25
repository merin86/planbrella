from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Group
from .serializers import GroupSerializer
from planbrella_api.permissions import IsOwnerOrReadOnly

class GroupList(APIView):
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

    """
    List all groups, or create a new group.
    """
    def get(self, request, format=None):
        """
        Handles GET requests to retrieve all groups.
        Returns serialized group data.
        """
        groups = Group.objects.filter(owner=request.user)
        serializer = GroupSerializer(
            groups,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Handles POST requests to create a new group.
        Saves the group if valid and returns the created group data,
        or returns validation errors if the data is invalid.
        """
        serializer = GroupSerializer(
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GroupDetail(APIView):
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    """
    Retrieve, update or delete a group instance.
    """
    def get_object(self, pk):
        """
        Helper method to get the group object with the provided pk,
        or raise Http404 if the group does not exist.
        Checks object-level permissions before returning the object.
        """
        try:
            group = Group.objects.get(pk=pk, owner=self.request.user)
            self.check_object_permissions(self.request, group)
            return group
        except Group.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        """
        Handles GET requests to retrieve group details.
        Serializes and returns the group data.
        """
        group = self.get_object(pk)
        serializer = GroupSerializer(group, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Handles PUT requests to update a group.
        Updates the group with valid data and returns the updated group data,
        or returns validation errors if the data is invalid.
        """
        group = self.get_object(pk)
        serializer = GroupSerializer(
            group,
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Handles DELETE requests to remove a group.
        Deletes the group and returns a 204 No Content status.
        """
        group = self.get_object(pk)
        group.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
