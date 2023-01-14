from django.contrib import admin

# Register your models here.
from . models import VideoUploadModel,ImageUploadModel

admin.site.register(VideoUploadModel)
admin.site.register(ImageUploadModel)