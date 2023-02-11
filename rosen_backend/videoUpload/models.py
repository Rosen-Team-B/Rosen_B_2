from django.db import models

# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")

class ReferenceImageModel(models.Model):
    image = models.ImageField(upload_to="refImageUpload")
    label = models.CharField(max_length=100,blank=True, default='')

class ImageFrameModel(models.Model):
    image = models.ImageField(upload_to="video_frames")
    timestamp = models.CharField(max_length=100,blank=True, default='')