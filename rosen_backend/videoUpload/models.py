from django.db import models


# Create your models here.
class VideoModel(models.Model):
    video = models.FileField(upload_to="refVideoUpload")
    name = models.CharField(max_length=100, blank=False, default="")
    # todo: make sure this is set, ask FE to always supply a name field

    @property
    def file_path(self):
        return self.video.name

    @property
    def title(self):
        """
        Return just the video's name, stripping out the directory and file extension (any file extension)
        """
        # todo: finish properly, use some cool regex or something idk, write tests
        file_name = self.video.name.split("/")[-1]
        return file_name.split(".")[0]


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
        return str(self.timestamp).replace(":", "").replace(".", "")

    @property
    def generated_filename(self):
        return f"{self.video.title}-{self.formatted_timestamp}"

    def save(self, *args, **kwargs):
        self.filename = self.generated_filename
        super().save(*args, **kwargs)
