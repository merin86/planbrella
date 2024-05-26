from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .settings import (
    JWT_AUTH_COOKIE, JWT_AUTH_REFRESH_COOKIE, JWT_AUTH_SAMESITE,
    JWT_AUTH_SECURE,
)


@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def root_route(request):
    """
    Provides a GET endpoint that returns a welcome message
    and URIs for profiles, tasks, and comments.
    This endpoint is accessible with read-only permissions,
    making it available to authenticated and unauthenticated users,
    but only showing data based on the permission level.
    """
    return Response({
        "message": "Welcome to the Planbrella API!",
        "profiles": request.build_absolute_uri('/profiles/'),
        "tasks": request.build_absolute_uri('/tasks/'),
        "comments": request.build_absolute_uri('/comments/')
    })


@api_view(['POST'])
def logout_route(request):
    """
    Provides a POST endpoint to log out a user by clearing
    authentication cookies.
    This endpoint sets the JWT authentication and refresh cookies
    to empty, effectively logging out the user.
    """
    response = Response()
    response.set_cookie(
        key=JWT_AUTH_COOKIE,
        value='',
        httponly=True,
        expires='Thu, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
    response.set_cookie(
        key=JWT_AUTH_REFRESH_COOKIE,
        value='',
        httponly=True,
        expires='Thu, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
    return response
