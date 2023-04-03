from DeepImageSearch import Index, LoadData, SearchImage
from .models import ImageFrameModel
import os

def create_viewable_links(image_list):
    backend_url = "http://localhost:8000/"
    for key in image_list:
        location = image_list[key].split("/rosen_backend/")[-1]
        name = location.split("/")[-1][:-4]
        time = 0.0
        image_frame_model = ImageFrameModel.objects.filter(filename__contains=name)
        if image_frame_model.exists():
            print("$"*50)
            time = image_frame_model.timestamp
        json_sub_object = {"location": backend_url + location,"timestamp": time}
        image_list[key] = json_sub_object
    return image_list


def DeepSearch(image):
    image_list = LoadData().from_folder(["/rosen_backend/media/video_frames/"])
    if ("meta-data-files" not in os.listdir("/rosen_backend/")) or len(
        os.listdir("/rosen_backend/meta-data-files/")
    ) == 0:
        print("Metadata Index files not found. Indexing...")
        Index(image_list).Start()
    similar_img_list = SearchImage().get_similar_images(image, 20)
    return create_viewable_links(similar_img_list)
