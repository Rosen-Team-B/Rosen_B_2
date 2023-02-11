from DeepImageSearch import Index, LoadData, SearchImage
import os

def start():
    image_list = LoadData().from_folder(['rosen_backend/media/video_frames/'])
    Index(image_list).Start()
    print(SearchImage().get_similar_images(image_list[9],6))
    print("image list complete")

if __name__ == "__main__":
    start()