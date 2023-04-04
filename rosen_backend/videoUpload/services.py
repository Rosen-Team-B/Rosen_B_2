import cv2
from django.core.files.base import ContentFile
from datetime import timedelta
from .models import ImageFrameModel, VideoModel

class ImageFrameService():
    IMAGE_FILE_EXTENSION = ".png"  # depends on supported types by cv2 package
    progress = 0  # FIXME: should be an instance variable to avoid clashes between sessions
    
    def __init__(self, video_model: VideoModel) -> None:
        self.video = video_model

    def save_image_frames(self, frame_interval=1000):
        """
        Save video image frames
        """
        vid_object = cv2.VideoCapture(f"./media/{self.video.file_path}")
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
                _, buf = cv2.imencode(self.IMAGE_FILE_EXTENSION, image)
                imagetest = ContentFile(buf.tobytes())
                img_model = ImageFrameModel()
                img_model.video = self.video
                # get the current frame number
                cframe = vid_object.get(cv2.CAP_PROP_POS_FRAMES)
                time = cframe / fps
                # convert into hh:mm:ss format
                img_model.timestamp = timedelta(seconds=time)
                img_model.image.save(f"{img_model.generated_filename}{self.IMAGE_FILE_EXTENSION}", imagetest)
                img_model.save()
                ImageFrameService.set_status(current_frame=cframe, total_frames=total_frames)
                print(200*"*",img_model.filename,"-",)
            count += 1
    
    @classmethod
    def set_status(cls, current_frame, total_frames):
        cls.progress = round(100*(current_frame/total_frames),2)