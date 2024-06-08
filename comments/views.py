from rest_framework import generics, permissions
from rest_framework.pagination import PageNumberPagination
from planbrella_api.permissions import IsOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer, CommentUpdateSerializer


class CommentPagination(PageNumberPagination):
    """
    Custom pagination class for paginating comments.
    """
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100


class CommentList(generics.ListCreateAPIView):
    """
    API view to retrieve the list of all comments or create
    a new comment.
    """
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = CommentPagination

    def get_queryset(self):
        task_id = self.request.query_params.get('task')
        return Comment.objects.filter(task_id=task_id)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a comment instance.
    """
    queryset = Comment.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]

    def get_serializer_class(self):
        if self.request.method in ['PUT', 'PATCH']:
            return CommentUpdateSerializer
        return CommentSerializer
