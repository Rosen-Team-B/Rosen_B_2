from django.db.models.signals import post_save
from django.core.files.base import ContentFile
from django.dispatch import receiver
from .models import VideoModel, ImageFrameModel
import cv2
import pdb

# @receiver(post_save, sender=VideoModel)
# def video_parser(sender, **kwargs):
#     # we must currently specify the name of the video being uploaded
#     vid_object = cv2.VideoCapture("./media/refVideoUpload/toronto.mp4")
#     count = 0
#     success = 1
#     while success:
#         success, image = vid_object.read()
#         # this line below saves the image every 50 frames,
#         if (count%1000==0):
#             # No need to validate input using a serializer, as we already check using the VideoSerializer
#             ret, buf = cv2.imencode('.png', image)
#             imagetest = ContentFile(buf.tobytes())
#             img_model = ImageFrameModel()
#             img_model.image.save("frame%dtest.png" % count, imagetest)
#         count += 1
#     print("Video has been split into frames")
