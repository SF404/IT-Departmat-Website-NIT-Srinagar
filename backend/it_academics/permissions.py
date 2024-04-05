from rest_framework import permissions
from .models import Course

class IsInstructorOfCourse(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return False
        
        course_id = view.kwargs.get('course_id')
        if course_id is None:
            return False
        
        course = Course.objects.filter(pk=course_id, instructor=request.user.faculty).exists()
        return course
