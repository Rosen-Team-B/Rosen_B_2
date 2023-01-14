from django.urls import path

from videoUpload import views

urlpatterns = [
    path('upload', views.get_video_view, name='get_video'),
]