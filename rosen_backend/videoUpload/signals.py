from django.db.models.signals import post_save
from django.core.files.base import ContentFile
from django.core.files.images import ImageFile
from django.dispatch import receiver
from . models import VideoModel
from . serializers import ImageFrameModelSerializer
import cv2
import io
from PIL import Image as im
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
            data = im.fromarray(image)
            imagetest = ImageFile(io.BytesIO(data.tobytes()), "frame%d.png" % count)
            #This line below works
            #data.save("C:/Users/alila/Desktop/COSC 499/Rosen_B_2/rosen_backend/media/video_frames/frame%dtest.png" % count)
            #This line still needs work to be done to it
            serializer = ImageFrameModelSerializer(data={"image":imagetest})
            serializer.is_valid()
            serializer.save()
        count += 1
    print("Video has been split into frames")