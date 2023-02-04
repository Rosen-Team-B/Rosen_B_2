from django.db.models.signals import post_save
from django.core.files.base import ContentFile
from django.dispatch import receiver
from . models import VideoModel
from . serializers import ImageFrameModelSerializer
import cv2
import pdb

@receiver(post_save, sender=VideoModel)
def video_parser(sender, **kwargs):  
    # we must currently specify the name of the video being uploaded
    vid_object = cv2.VideoCapture("./media/refVideoUpload/toronto.mp4")
    count = 0
    success = 1
    while success:
        success, image = vid_object.read()
        # this line below saves the image every 50 frames,
        if (count%1000==0):
            #cv2.imwrite("./media/video_frames/frame%d.jpg" % count, image)
            serializer = ImageFrameModelSerializer(data={"image":ContentFile(image, "frame.jpg")})
            serializer.is_valid()
            serializer.save()
        count += 1
    print("Video has been split into frames")