from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def root_route(request):
    return Response({
        "message": "Welcome to the Planbrella API!",
        "profiles": request.build_absolute_uri('/profiles/'),
        "tasks": request.build_absolute_uri('/tasks/'),
        "comments": request.build_absolute_uri('/comments/')
    })
