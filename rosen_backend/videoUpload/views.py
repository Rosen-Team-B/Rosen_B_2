from django.shortcuts import render
from .models import VideoModel
from .serializers import VideoModelSerializer
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response


def index(request):
    vid = VideoModel.objects.all()
    return render(request,"index.html",{"video":vid})

@api_view(["GET"])
@parser_classes([FileUploadParser])
def get_video_view(request):
    id = request.GET.get("id",None) #This gets the id from the request, and if it's not provided, it defaults to none
    video = VideoModel.objects.get(id=id)
    serializer = VideoModelSerializer(video,many=False)
    return Response(serializer.data)


