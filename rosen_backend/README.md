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

This should run the BE, and you can access the admin BE instance by going to this [link](http://127.0.0.1:8000/admin).

To access the API Endpoints page, go to this [link](http://127.0.0.1:8000/videoUpload/).

## Running the App from a Docker Instance

`cd rosen_backend`

Use this command in terminal to navigate to the App for both frontend and backend.

`docker-compose build`

This will build the container and install all dependencies. Run this command when docker desktop is active and if containers are not already made.

`docker-compose up`

Frontend container go to http://localhost:3000/

Backend container go to http://localhost:8000/videoUpload

`docker-compose down`

This will stop the container from running.

## venv initalization (Dev only)

`python -m venv [namedVirtualEnvironment]`

Run this command in terminal to create a virtual environment for dev usage. A venv is useful for clean installs and testing if changes function on a clean setup.

`[namedVirtualEnvironment]\Scripts\activate` or `[namedVirtualEnvironment]\Scripts\activate.bat`

After making the venv, run the activation script which will activate the virtual environment.

`pip install` and `pip install [package]`

Last thing to do is run pip install to install all dependencies and also install any other packages that are not in requirements.txt

`deactivate`

Stopping the venv

## REQUIRED: Make Migrations and Migrate Django models BEFORE starting dev work

The first time a dev runs the app they need to run the following command to make migrations and migrate django object models to postgres. We need to run these commands on the docker container which will get propogated to our local environment meaning we won't have to run these commands unless there is a change to the actual models.

Whenever there is a change in the models or their properties, run the following command:

```sh
docker exec -it docker-rosen-back-c python manage.py makemigrations
```

This makes the migrations for django. After this, run:

```sh
docker exec -it docker-rosen-back-c python manage.py migrate
```

which will apply the migrations for the app. After this you should be ready to develop.
