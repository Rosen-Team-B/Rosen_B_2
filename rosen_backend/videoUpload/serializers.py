from django.core import serializers
from .models import VideoModel,ReferenceImageModel,ImageFrameModel
from rest_framework import serializers

class VideoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoModel
        fields = ('video',)

class ReferenceImageModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReferenceImageModel
        fields = ('image', 'label', 'pk')

class ImageFrameModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageFrameModel
        fields = ('image','timestamp')