# Backend Instructions

This project was bootstrapped with [Django](https://www.djangoproject.com/start/).

This is the README for the backend.

This project runs on Django and the DjangoREST framework. DjangoREST is dependent on a Django environment.

## Dependencies to Install Before Running the App
- Python3> or later : Ensure your local device has a Python3 version or newer
- Docker: Running will require the installation of Docker desktop: https://www.docker.com/products/docker-desktop/
- Django : A backend framework that relies on Python3, installion instructions can be found here: https://docs.djangoproject.com/en/4.1/intro/install/

## Running the App from a Local Instance

To run the application strictly on the BE, without any FE implementation, please run the following command on a new terminal:

`cd path/to/project/App/rosen_backend`

This will navigate you to the BE folder, then run:

`py manage.py runserver`

This should run the BE, and you can access the default BE instance by going this [link](http://localhost:8000/polls/).


## Running the App from a Docker Instance

`cd App`

Use this command in terminal to navigate to the App for both frontend and backend.

`docker-compose build`

This will build the container and install all dependencies. Run this command when docker desktop is active.

`docker-compose up`

Actives container go to http://localhost:3000/

`ctrl-compose down`

This will stop the container from running.
