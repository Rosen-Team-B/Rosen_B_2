from django.shortcuts import render
from .models import VideoUploadModel
from .serializers import VideoUploadModelSerializer
from django.http import HttpResponse
from rest_framework.decorators import api_view,parser_classes
from rest_framework.parsers import FileUploadParser


def index(request):
    vid = VideoUploadModel.objects.all()
    return render(request,"index.html",{"video":vid})

@api_view(["GET","POST"])
@parser_classes([FileUploadParser])
def dummy(request):
    video = VideoUploadModel.objects.all()
    serializer = VideoUploadModelSerializer(video,many=False)
    return HttpResponse(serializer.data)
