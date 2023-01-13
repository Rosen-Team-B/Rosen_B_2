from django.db import models

# Create your models here.
class VideoUploadModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")