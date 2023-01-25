from django.db import models

# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")

class ImageModel(models.Model):
    image = models.FileField(upload_to="refImageUpload")