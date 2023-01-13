from django.core import serializers
from .models import VideoUploadModel,ImageUploadModel
from rest_framework import serializers

class VideoUploadModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoUploadModel
        fields = ('video')

class ImageUploadModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUploadModel
        fields = ('image')