from DeepImageSearch import Index, LoadData, SearchImage
from .models import ImageFrameModel
import os

def create_viewable_links(image_list) -> list:
    backend_url = "http://localhost:8000/"
    for key, image_path in image_list.items():
        location = image_path.replace("/rosen_backend/media/", "")
        image_frame_model = ImageFrameModel.objects.filter(image__icontains=location).get()

        time = image_frame_model.timestamp
        json_sub_object = {"location": f"{backend_url}/media/{image_frame_model.image.name}","timestamp": time}
        image_list[key] = json_sub_object
    return image_list


def DeepSearch(image) -> dict:
    image_list = LoadData().from_folder(["/rosen_backend/media/video_frames/"])

    if not image_list:
        return {}

    if ("meta-data-files" not in os.listdir("/rosen_backend/")) or len(
        os.listdir("/rosen_backend/meta-data-files/")
    ) == 0:
        print("Metadata Index files not found. Indexing...")
        # TODO: this breaks your app's functionality, I think, why not Index every time if it's necessary, just overwrite the old files?
        Index(image_list).Start()
    similar_img_list = SearchImage().get_similar_images(image, 20)
    return create_viewable_links(similar_img_list)
