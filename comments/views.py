from rest_framework import generics, permissions
from rest_framework.pagination import PageNumberPagination
from planbrella_api.permissions import IsOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer


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
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    pagination_class = CommentPagination

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a comment instance.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
