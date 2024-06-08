from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Task
from .serializers import TaskSerializer
from planbrella_api.permissions import IsOwnerOrReadOnly


class TaskList(APIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    """
    List all tasks, or create a new task.
    """
    def get(self, request, format=None):
        """
        Handles GET requests to retrieve all tasks.
        Returns serialized task data.
        """
        tasks = Task.objects.filter(owner=request.user)
        serializer = TaskSerializer(
            tasks,
            many=True,
            context={'request': request}
        )
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Handles POST requests to create a new task.
        Saves the task if valid and returns the created task data,
        or returns validation errors if the data is invalid.
        """
        serializer = TaskSerializer(
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TaskDetail(APIView):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    """
    Retrieve, update or delete a task instance.
    """
    def get_object(self, pk):
        """
        Helper method to get the task object with the provided pk,
        or raise Http404 if the task does not exist.
        Checks object-level permissions before returning the object.
        """
        try:
            task = Task.objects.get(pk=pk, owner=self.request.user)
            self.check_object_permissions(self.request, task)
            return task
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        """
        Handles GET requests to retrieve task details.
        Serializes and returns the task data.
        """
        task = self.get_object(pk)
        serializer = TaskSerializer(task, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        """
        Handles PUT requests to update a task.
        Updates the task with valid data and returns the updated task data,
        or returns validation errors if the data is invalid.
        """
        task = self.get_object(pk)
        serializer = TaskSerializer(
            task,
            data=request.data,
            context={'request': request}
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        """
        Handles DELETE requests to remove a task.
        Deletes the task and returns a 204 No Content status.
        """
        task = self.get_object(pk)
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
