FROM python:3.11

WORKDIR /rosen_backend
ENV PYTHONBUFFERED = 1

COPY rosen_backend/requirements.txt .

RUN pip install -r requirements.txt

COPY rosen_backend/ . 

EXPOSE 8000

CMD ["python3","manage.py","runserver"]