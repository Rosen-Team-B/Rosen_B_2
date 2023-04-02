import cv2
from django.core.files.base import ContentFile
from datetime import timedelta
from .models import ImageFrameModel, VideoModel

class ImageFrameService():

    def __init__(self, video_model: VideoModel) -> None:
        self.progress = 0

    def save_image_frames(self, frame_interval=1000):
        """
        Save video image frames
        """
        vid_object = cv2.VideoCapture(f"./media/{self.video.name}")
        # vid_object = cv2.VideoCapture(f"./media/notthere.mp4")
        count = 0
        success = 1
        total_frames = vid_object.get(cv2.CAP_PROP_FRAME_COUNT)
        # calculate frames per second of the video
        fps = vid_object.get(cv2.CAP_PROP_FPS)
        while success:
            success, image = vid_object.read()
            if count % frame_interval == 0:
                # No need to validate input using a serializer, as we already check using the VideoSerializer
                _, buf = cv2.imencode(".png", image)
                imagetest = ContentFile(buf.tobytes())
                img_model = ImageFrameModel()
                img_model.video = self
                # get the current frame number
                cframe = vid_object.get(cv2.CAP_PROP_POS_FRAMES)
                time = cframe / fps
                # convert into hh:mm:ss format
                td = timedelta(seconds=time)
                img_model.timestamp = td
                img_model.image.save(f"{self.video.name}frame{img_model.formatted_timestamp}.png", imagetest)
                
                img_model.save()
            count += 1