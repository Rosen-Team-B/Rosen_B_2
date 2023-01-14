from django.urls import path

from videoUpload import views

urlpatterns = [
    path('get-video', views.get_video_view, name='get_video'),
    path('upload-video', views.post_video_view, name='post_video')
]