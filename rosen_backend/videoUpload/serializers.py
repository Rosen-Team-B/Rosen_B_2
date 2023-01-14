from django.core import serializers
from .models import VideoModel,ImageModel
from rest_framework import serializers

class VideoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoModel
        fields = ('video',)

class ImageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageModel
        fields = ('image',)