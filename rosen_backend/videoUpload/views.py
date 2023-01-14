from django.shortcuts import render
from .models import VideoModel
from .serializers import VideoModelSerializer
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework import viewsets

@api_view(["GET"])
def get_video_view(request):
    id = request.GET.get("id",None) #This gets the id from the request, and if it's not provided, it defaults to none
    video = VideoModel.objects.get(id=id)
    serializer = VideoModelSerializer(video,many=False)
    return Response(serializer.data)

@api_view(["POST"])
@parser_classes([FileUploadParser])
def post_video_view(request):
    file_obj = request.data['file']
    serializer = VideoModelSerializer(data={"video":file_obj})
    serializer.save() 
    return Response(serializer.data)

class VideoViewSet(viewsets.ModelViewSet):
    queryset = VideoModel.objects.all()
    serializer_class = VideoModelSerializer
