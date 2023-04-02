from django.db import models


# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")
    name = models.CharField(max_length=100, blank=False, default="")  # todo: make sure this is set


class ReferenceImageModel(models.Model):
    image = models.FileField(upload_to="refImageUpload")
    label = models.CharField(max_length=100, blank=True, default="")


class ImageFrameModel(models.Model):
    image = models.FileField(upload_to="video_frames")
    # todo: add a filename field
    timestamp = models.CharField(max_length=100, blank=True, default="")
    video = models.ForeignKey(VideoModel)  # todo: make sure this is set

    @property
    def formatted_timestamp(self):
        """
        Format the timestamp to not have special characters
        """
        return self.timestamp.replace(":","").replace(".","")

    @property
    def generated_filename(self):
        return f"{self.video.name}-{self.formatted_timestamp}"
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        """
        self.filename = self.generated_filename
        self.save()
        """
