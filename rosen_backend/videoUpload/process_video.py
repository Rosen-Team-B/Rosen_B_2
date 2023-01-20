from django.db.models.signals import post_save
from django.dispatch import receiver
from models import VideoModel
import cv2

@receiver(post_save, sender=VideoModel)
def my_handler(sender, **kwargs):
    vid_object = cv2.VideoCapture("./media/refVideoUpload")
    count = 0
    success = 1
    while success:
        success, image = vid_object.read()
        cv2.imwrite("frame%d.jpg" % count, image)
        count += 1
    print("Video has been split into frames")