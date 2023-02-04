from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import VideoModel
import cv2

@receiver(post_save, sender=VideoModel)
def video_parser(sender, **kwargs):  
    #we must currently specify the name of the video being uploaded
    vid_object = cv2.VideoCapture("./media/refVideoUpload/toronto.mp4")
    count = 0
    success = 1
    while success:
        success, image = vid_object.read()
        # this line below saves the image every 50 frames,
        if (count%50==0):
            cv2.imwrite("./media/video_frames/frame%d.jpg" % count, image)
        count += 1
    print("Video has been split into frames")