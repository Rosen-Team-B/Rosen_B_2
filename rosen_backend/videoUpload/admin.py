from django.contrib import admin

# Register your models here.
from videoUpload.models import VideoModel,ReferenceImageModel,ImageFrameModel

admin.site.register(VideoModel)
admin.site.register(ReferenceImageModel)
admin.site.register(ImageFrameModel)
