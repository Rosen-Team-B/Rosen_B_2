FROM python:3.10

WORKDIR /rosen_backend
ENV PYTHONBUFFERED = 1

COPY rosen_backend/requirements.txt .

RUN pip install -r requirements.txt

# python-opencv dependencies
RUN apt-get update && apt-get install ffmpeg libsm6 libxext6  -y

COPY rosen_backend/ . 

EXPOSE 8000

CMD ["python","manage.py","runserver", "0.0.0.0:8000"]