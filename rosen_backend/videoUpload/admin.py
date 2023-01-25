from django.contrib import admin

# Register your models here.
from videoUpload.models import VideoModel,ImageModel

admin.site.register(VideoModel)
admin.site.register(ImageModel)