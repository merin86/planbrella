from django.contrib import admin
from .models import Profile
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User


class ProfileInline(admin.StackedInline):
    """
    Defines the inline admin descriptor for Profile model
    which acts a bit like a singleton.
    """
    model = Profile
    can_delete = False
    verbose_name_plural = 'profile'
    fk_name = 'owner'


class CustomUserAdmin(BaseUserAdmin):
    """
    Custom UserAdmin that includes the Profile inline.
    """
    inlines = (ProfileInline,)

    def get_inline_instances(self, request, obj=None):
        """
        Overwrites the method to prevent adding Profile inline when
        creating a new user. The inline instance is only shown when
        the user object is already created and is being modified.
        """
        if not obj:
            return list()
        return super(CustomUserAdmin, self).get_inline_instances(request, obj)


admin.site.unregister(User)
admin.site.register(User, CustomUserAdmin)


class ProfileAdmin(admin.ModelAdmin):
    """
    Admin view for Profile model.
    """
    list_display = ('owner', 'name', 'created_at', 'description')
    list_filter = ('created_at',)
    search_fields = ('name', 'owner__username', 'description')
    readonly_fields = ('created_at',)

    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.prefetch_related('owner')


admin.site.register(Profile, ProfileAdmin)
