from django.db import models

# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")
    name = models.CharField(max_length=100, blank=False, default="") 
     # todo: make sure this is set, ask FE to always supply a name field


class ReferenceImageModel(models.Model):
    image = models.FileField(upload_to="refImageUpload")
    label = models.CharField(max_length=100, blank=True, default="")


class ImageFrameModel(models.Model):
    image = models.FileField(upload_to="video_frames", null=False)
    filename = models.CharField(max_length=100, null=False)
    timestamp = models.CharField(max_length=100, null=False)
    video = models.ForeignKey(VideoModel, on_delete=models.PROTECT, null=False)  
    # todo: make sure this is set

    @property
    def formatted_timestamp(self):
        """
        Format the timestamp to not have special characters
        """
        return str(self.timestamp).replace(":","").replace(".","")

    @property
    def generated_filename(self):
        return f"{self.video.name}-{self.formatted_timestamp}"
    
    def save(self, *args, **kwargs):
        self.filename = self.generated_filename
        super().save(*args, **kwargs)
