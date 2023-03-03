from DeepImageSearch import Index, LoadData, SearchImage
import os

def DeepSearch():
    image_list = LoadData().from_folder(['rosen_backend/media/video_frames/'])
    Index(image_list).Start()
    print(SearchImage().get_similar_images(image_list[0],6))
    print("image list complete")

if __name__ == "__main__":
    DeepSearch()