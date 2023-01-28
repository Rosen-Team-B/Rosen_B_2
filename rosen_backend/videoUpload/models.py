from django.db import models

# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")

class ReferenceImageModel(models.Model):
    image = models.FileField(upload_to="refImageUpload")
    label = models.CharField(max_length=100,blank=True, default='')