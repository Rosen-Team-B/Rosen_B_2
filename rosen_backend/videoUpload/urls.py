from django.urls import path, include
from videoUpload import views
from rest_framework import routers
from videoUpload.views import (
    VideoViewSet,
    ReferenceImageViewSet,
    ImageFrameViewSet,
    AdminViewSet,
)

router = routers.DefaultRouter()
router.register(r"video", VideoViewSet, basename="video")
router.register(r"reference_image", ReferenceImageViewSet, basename="reference_image")
router.register(r"image_frame", ImageFrameViewSet, basename="image_frame")
router.register(r"admin", AdminViewSet, basename="admin")

urlpatterns = [
    path("", include(router.urls)),
    # path('get-video', views.get_video_view, name='get_video'),
    # path('upload-video', views.post_video_view, name='post_video')
]
