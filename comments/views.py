from rest_framework import generics, permissions
from planbrella_api.permissions import IsOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer


class CommentList(generics.ListCreateAPIView):
    """
    API view to retrieve the list of all comments or create
    a new comment.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    API view to retrieve, update, or delete a comment instance.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadOnly]
