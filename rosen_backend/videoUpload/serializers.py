from django.core import serializers
from .models import VideoUploadModel
from rest_framework import serializers

class VideoUploadModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoUploadModel
        fields = ('video')