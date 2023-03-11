from .models import VideoModel,ReferenceImageModel,ImageFrameModel
from .serializers import VideoModelSerializer,ReferenceImageModelSerializer,ImageFrameModelSerializer
from rest_framework import viewsets, status
from rest_framework.decorators import action
import cv2
from django.core.files.base import ContentFile
from datetime import timedelta
# from rest_framework.decorators import api_view,parser_classes
# from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from .DeepSearch import DeepSearch

class VideoViewSet(viewsets.ModelViewSet):
    queryset = VideoModel.objects.all()
    serializer_class = VideoModelSerializer

    def perform_create(self, serializer):
        video = self.request.FILES["video"]
        if video is not None:
            vid_object = cv2.VideoCapture(video.temporary_file_path())
            count = 0
            success = 1
            #calculate frames per second of the video
            fps = vid_object.get(cv2.CAP_PROP_FPS)
            while success:
                success, image = vid_object.read()
                # this line below saves the image every 1000 frames
                if (count%1000==0):
                    # No need to validate input using a serializer, as we already check using the VideoSerializer
                    ret, buf = cv2.imencode('.png', image)
                    imagetest = ContentFile(buf.tobytes())
                    img_model = ImageFrameModel()
                    img_model.image.save(video.name + "frame%dtest.png" % count, imagetest)
                    #get the current frame number
                    cframe = vid_object.get(cv2.CAP_PROP_POS_FRAMES)
                    time = cframe/fps
                    # convert into hh:mm:ss format
                    td = timedelta(seconds=time)
                    img_model.timestamp = td
                    img_model.save()
                count += 1
        serializer.save()

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
       
        # Return that
        return Response(results, status=status.HTTP_200_OK)

class ImageFrameViewSet(viewsets.ModelViewSet):
    queryset = ImageFrameModel.objects.all()
    serializer_class = ImageFrameModelSerializer

#Below code is unused
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
