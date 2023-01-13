Project Description
Detailed Introduction to the Project
The goal of the project is to develop a software system that enables Rosen data scientists to classify a large amount of images from water pipeline inspections in an efficient way. The classes should not be predefined by the software, instead they are defined by the user’s decisions. The software system should be supported by an active learning algorithm that uses one of the VGG16 layers to vectorize images.
Project Perspective
This is a new project that does not have to replace or build on any existing systems within Rosen.

Users Regarding this Project
User profile 1: Main users
Job title: Data scientists in Rosen
Tech: Fluent in Python
Task: Given a section of the water pipeline inspection videos, make algorithms to classify images of objects.
Working style: Data scientists in Rosen work in a team per inspection video to make multiple algorithms. 2 groups per algorithm.
User profile 2: Potential users
Potentially, administrator.
Project should be built based on the knowledge of adding more users with different privileges.

Product Scope
In the section we will clarify the focus of the project and rank priorities.
Focus
The focus is on the software rather than the algorithms. 
The active learning algorithms do not need to be optimized.
Lower priorities: authentication, security, installation package.
Ranking priorities
The highest priorities to lowest: 
(P1) A must requested from Rosen 
(P2) Developers priorities - what we think should be on the website (in order for website to work smoothly) 
(P3/optional) wish list
The goal is to achieve all requirements labeled as (P1) and as many (P2) as the develop team can. Features labeled as (P3) will be implemented if time allows and the other 2 priorities have been finished. For details, please check the product requirements section.

Dependencies (given to the dev team)
Data/images to train the active learning algorithm:
(optional) Blender Asset given by Rosen
(optional) Random Videos online.
Active learning algorithm:
Python library: TBD.
One layer of the pre-trained VGG16 (Open source)
Assumptions & Definitions
AL algorithm: The active learning algorithm.
An iteration for the AL algorithm: Per training session. (Everything up until the submission to train/retrain)
Performance: Not timewise. It is the accuracy of the AL algorithm (aka always return back correct images). Or, the number of iterations until the AL algorithm is marked by the user as “done training”.

Product requirements
Functional requirements
Web application details
(P1) The software should be a web application with a user interface.
Classification details
(P1) The web app should allow the user to upload an image and the name of the target item in that image as the label. 
(P1) The web app should allow the user to submit the image-label pair to the AL algorithm to train the AL algorithm.
(optional) The web app should allow the user to define how many images the algorithm will return.
(P1) The web app should present a number of images (hardcode or (optional) user defined) pulled out from the storage. The images should have a predicted label from the AL algorithm in the form of “is_target” or “is_not_target” on each image.
(P1) The web app should allow the user to mark the predicted labels of each image correctly.  For example: Add labels to all images as “I’m_interested” or “Not_interested”. The “I’m_interested” labels should be given to images with target items in it.
(P1) The web app should allow the user to submit the images with “I’m_interested” or “Not_interested” labels back to the AL algorithm to retrain it.
(P2) The web app should allow users to identify when the AL algorithm is done training. (i.g. A “i’m done training” button.)
(optional) The web app should display information of the AL algorithm to help the user identify when the AL algorithm is done training.

Others
(P1) The storage should store images from the water pipeline inspection and vectors of images.
(optional) Write a script to make 1 video to images with timestamp as the image name.
(P1) The backend of the web app should query from the storage a number of images and feed them to the AL algorithm for prediction.
(P2) The number of images either is hard code or (optional) user defined
(optional) A button for downloading the “Done training” AL algorithm.
(optional) Build different user types.

AL algorithm details
(P1) AL algorithm should be able to intake image-label pairs as training data.
(P2) AL algorithm should be able to intake images queried from the storage and predict the classes for each image.
(P1) AL algorithm should be built from scratch with 1 or more Python libraries (TBD)
(P1) AL algorithm should use one layer of the pre-trained VGG16 (Open source) for vectorizing images.
(P1) AL algorithm should be built to be retrainable.

Non-functional requirements
Code & Repository Setup 
Source code integrated in a private source code management system (GitHub). 
Including configuration and installation documentation in the GitHub.
Software architecture and technical documentation.
Following the principles of clean code.
Maintainability: Suggesting that frontend written in JavaScript and backend written in Python.
Build code based on the fact that potential users (i.g. admin) will be added in the future.

Data
 What kinds/types of data need to be stored?
Store images from the water pipeline inspection and their vectors. 
Store the active learning algorithm.
 How will they be stored (e.g. database)?
Local storage (database) is required.
One drive should not be considered. It’s considered could storage.
Size/amount and accuracy of the data?
 The system must work with 500,000 frames. 
Data access: 
(optional) The data (input/ image to analyze) should be generated by Blender given the Blender asset. This Blender asset will be provided.
(optional) Videos online

Testing
Performance tests for the time needed for one step of the active learning process.
Constrains: 
The client’s user interface shall be a web application running on Google Chrome.
Standard data scientist development environment has the following configuration:
Laptop: 16GB RAM, Intel core i5/i7 11th gen, SSD 256 GB)
Desktop: 16/32 GB RAM, 512 GB / 1 TB SSD, Core i7 and Dedicated GPU
Optional Non-Functional Requirements 
(optional) Enhanced water pipeline inspection generator.
(optional) Classification performance for self-defined classification tasks.


Milestone:
M1:
Requirements report (due Oct 21th)
M2:
UI design (due Nov 4th)

M3: (6 weeks)
1 week framework setup (mainly frontend; backend if optional, but we have to look into how to integrate them into 1 repo) + decide on component library
3 week make share-able components + Nov. 21th: Peer testing report I + video demo (wireframe, design, wherever we are)
2 week have all pages up - skeleton
1 week  routing & styling & checking clickables (fallback week)

(M3 or M4 depend on time)
Find videos & write script to auto generate images out of them
Setup backend, & db (make models) & add images into db


M4 (algorithm – quick) 3
Make algorithm:  2 week: research python library + make the algorithm  (with vgg16)
Write APIs for the algorithm

M5 (backend + frontend wrap up) 1.5+1week
(back) 2 Write APIs to handle requests + Write API calls to request to the Algorithm
(front) Write API calls for the frontend (1) + pages/components to handle the user iterations (3) + Mar. 6th: Peer testing report II + video demo
(back) functions to retrain the model + API calls to the algorithm/ (algor) APIs- modifies (1)

M6 wrap up and deployment documents

Operating Environment & Test Strategy
Tech Stack
Frontend: React.js + TypeScript (catch error better, and better maintainability)
Graphics visualization: D3.js
Linter: Eslint
Backend: Django
Formatter: Black 
Linter: Flake8 
Database: MongoDB
Hosting Location: Locally
Testing
Testing frameworks:
Frontend: 
Jest.js
Backend: 
Django unit testing
Performance-testing-django python package
Regression testing: GitHub Action
Testing methods:
Unit testing:
Unit testing for new features in the frontend.
Unit Testing for the backend done with Django Unit Testing initially, then as application grows more complex move to different testing if needed.
Regression testing to ensure continuous integration		
Load and stress testing to find failure point of application TBD?
Performance tests for the time needed for one step of the active learning process. Done using performance-testing-django python package
