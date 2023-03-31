from .models import VideoModel, ReferenceImageModel, ImageFrameModel
from .serializers import (
    VideoModelSerializer,
    ReferenceImageModelSerializer,
    ImageFrameModelSerializer,
)
from rest_framework import viewsets, status
from rest_framework.decorators import action
from django.core.files.base import ContentFile
from datetime import timedelta
import cv2
from rest_framework.response import Response
from .DeepSearch import DeepSearch
from itertools import chain


class VideoViewSet(viewsets.ModelViewSet):
    queryset = VideoModel.objects.all()
    serializer_class = VideoModelSerializer
    videoprogress = 0

    def perform_create(self, serializer):
        video = self.request.FILES["video"]
        VideoViewSet.videoprogress = 0
        # default frame intervals to 1000
        frames_interval = 1000
        if "interval" in self.request.POST:
            frames_interval = int(self.request.POST["interval"])
        if video is not None:
            vid_object = cv2.VideoCapture(video.temporary_file_path())
            count = 0
            success = 1
            total_frames = vid_object.get(cv2.CAP_PROP_FRAME_COUNT)
            # calculate frames per second of the video
            fps = vid_object.get(cv2.CAP_PROP_FPS)
            while success:
                success, image = vid_object.read()
                if count % frames_interval == 0:
                    # No need to validate input using a serializer, as we already check using the VideoSerializer
                    ret, buf = cv2.imencode(".png", image)
                    imagetest = ContentFile(buf.tobytes())
                    img_model = ImageFrameModel()
                    img_model.image.save(video.name + "frame%d.png" % count, imagetest)
                    # get the current frame number
                    cframe = vid_object.get(cv2.CAP_PROP_POS_FRAMES)
                    VideoViewSet.videoprogress = round(cframe / total_frames * 100, 2)
                    time = cframe / fps
                    # convert into hh:mm:ss format
                    td = timedelta(seconds=time)
                    img_model.timestamp = td
                    img_model.save()
                count += 1
        serializer.save()

    @action(detail=False, methods=["get"], url_path="status")
    def status(self, request):
        response_data = {"percentage_complete": VideoViewSet.videoprogress}
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

class AdminViewSet(viewsets.ViewSet):
    @action(detail=False, methods=["get"], url_path="wipedb")
    def wipe_db(self, request):
         # Return results as an HTTP response
        ImageFrameModel.objects.all().delete()
        ReferenceImageModel.objects.all().delete()
        VideoModel.objects.all().delete()
        return Response("Deleted", status=status.HTTP_200_OK)

# Below code is unused
# @api_view(["GET"])
# def get_video_view(request):
#     id = request.GET.get("id",None) #This gets the id from the request, and if it's not provided, it defaults to none
#     video = VideoModel.objects.get(id=id)
#     serializer = VideoModelSerializer(video,many=False)
#     return Response(serializer.data)

# @api_view(["POST"])
# @parser_classes([FileUploadParser])
# def post_video_view(request):
#     file_obj = request.data['file']
#     serializer = VideoModelSerializer(data={"video":file_obj})
#     serializer.save()
#     return Response(serializer.data)
