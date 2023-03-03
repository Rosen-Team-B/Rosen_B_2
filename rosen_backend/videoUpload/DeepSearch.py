from DeepImageSearch import Index, LoadData, SearchImage
import os

def DeepSearch(image):
    image_list = LoadData().from_folder(['/rosen_backend/media/video_frames/'])
    #Commenting out for obvious reasons
    #Index(image_list).Start()
    return SearchImage().get_similar_images(image,6)
