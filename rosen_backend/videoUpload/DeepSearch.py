from DeepImageSearch import Index, LoadData, SearchImage
import os

def DeepSearch():
    image_list = LoadData().from_folder(['rosen_backend/media/refImageUpload/'])
    Index(image_list).Start()
    print(SearchImage().get_similar_images(image_list[0],6))
