from .models import VideoModel, ReferenceImageModel, ImageFrameModel
from .serializers import (
    VideoModelSerializer,
    ReferenceImageModelSerializer,
    ImageFrameModelSerializer,
)
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .DeepSearch import DeepSearch
from .services import ImageFrameService


class VideoViewSet(viewsets.ModelViewSet):
    queryset = VideoModel.objects.all()
    serializer_class = VideoModelSerializer

    def perform_create(self, serializer):
        # video = self.request.FILES["video"]
        # VideoViewSet.videoprogress = 0
        # default frame intervals to 1000
        video = self.request.FILES["video"]
        name = self.request.POST.get("name")
        print("%"*6,name)
        #TODO: Check to see if name field is given
        #TODO: Check to see if progress is given
        #TODO: Check to see if wipe still happens
        #TODO: Check to see pk filter is now working
        instance = serializer.save()
        frames_interval = int(self.request.POST.get("interval",1000))
        service = ImageFrameService(video_model=instance)
        service.save_image_frames(frames_interval)

    # def perform_create(self, serializer):
        # video = self.request.FILES["video"]
        # VideoViewSet.videoprogress = 0
        # # default frame intervals to 1000
        # instance = serializer.save()

        # if video is not None:
        #     vid_object = cv2.VideoCapture(video.temporary_file_path())
        #     count = 0
        #     success = 1
        #     total_frames = vid_object.get(cv2.CAP_PROP_FRAME_COUNT)
        #     # calculate frames per second of the video
        #     fps = vid_object.get(cv2.CAP_PROP_FPS)
        #     while success:
        #         success, image = vid_object.read()
        #         if count % frames_interval == 0:
        #             # No need to validate input using a serializer, as we already check using the VideoSerializer
        #             ret, buf = cv2.imencode(".png", image)
        #             imagetest = ContentFile(buf.tobytes())
        #             img_model = ImageFrameModel()
        #             img_model.video = instance
        #             img_model.image.save(video.name + "frame%d.png" % count, imagetest)
        #             # get the current frame number
        #             cframe = vid_object.get(cv2.CAP_PROP_POS_FRAMES)
        #             VideoViewSet.videoprogress = round(cframe / total_frames * 100, 2)
        #             time = cframe / fps
        #             # convert into hh:mm:ss format
        #             td = timedelta(seconds=time)
        #             img_model.timestamp = td
        #             img_model.save()
        #         count += 1

    @action(detail=False, methods=["get"], url_path="status")
    def status(self):
        response_data = {"percentage_complete": ImageFrameService.get_status}
        # Return results as an HTTP response
        return Response(response_data, status=status.HTTP_200_OK)


class ReferenceImageViewSet(viewsets.ModelViewSet):
    queryset = ReferenceImageModel.objects.all()
    serializer_class = ReferenceImageModelSerializer

    @action(detail=True, methods=["get"], url_path="deepImageSearch")
    def deep_image_search(self, request, pk=None):
        image = self.get_object()
        # get filepath of image
        # pass into DeepImageSearch
        # get the array of results
        results = DeepSearch(image.image)

        # Return results as an HTTP response
        return Response(results, status=status.HTTP_200_OK)


class ImageFrameViewSet(viewsets.ModelViewSet):
    queryset = ImageFrameModel.objects.all()
    serializer_class = ImageFrameModelSerializer
