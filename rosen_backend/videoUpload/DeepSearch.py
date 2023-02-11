from DeepImageSearch import Index, LoadData, SearchImage


def start():
    image_list = LoadData().from_folder(['../media/video_frames/'])
    Index(image_list).Start()
    SearchImage().get_similar_images(image_list[9],6)
    SearchImage().plot_similar_images(image_list[9])

if __name__ == "__main__":
    start()