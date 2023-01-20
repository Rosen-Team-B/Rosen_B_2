from django.apps import AppConfig
from django.db.models.signals import post_save


class VideoUploadConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'videoUpload'
    def ready(self):
       from . import signals
