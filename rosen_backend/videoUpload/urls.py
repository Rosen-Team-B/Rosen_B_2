from django.urls import path, include
from videoUpload import views
from rest_framework import routers
from videoUpload.views import VideoViewSet, ReferenceImageViewSet

router = routers.DefaultRouter()
router.register(r'video',VideoViewSet,basename='video')
router.register(r'reference_image',ReferenceImageViewSet, basename='reference_image')

urlpatterns = [
    path('', include(router.urls)),
    #path('get-video', views.get_video_view, name='get_video'),
    #path('upload-video', views.post_video_view, name='post_video')
]