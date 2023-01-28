# Rosen_B_2

## Main Attributes to remove before handing off to Client

1. All meeting notes
2. All debug & testing documentation
3. All testing or temp elements (images, comments, etc.)

## Milestones

1. Gathering and Confirmation of Requirements
   Confirm the project's purpose
   Confirm client requested functionality for project
   Confirm tech stack
   (i.g. Frontend, backend, Database, and software utilities - blender, algorithms)
   Confirm integration, and potential authentication
   Completion by the end October 15th, 2022

2. Design
   Get design convention
   Share and collaborate on graphical design
   Review and confirm app layout
   Refine layout/interface for user functionality
   Completion by the end October 30th, 2022

3. Pre-Algorithm Coding
   Two tab based web app
   Imports
   Image imports will derive from local machine as database
   Classification
   Classifications must be user defined
   Will be defined after importing images
   Option to add classes will be available at anytime after initial process is completed
   Completion by January 20th, 2023

4. Algorithm Implementation (VGG16)
   Algorithm will automatically classify similar images to the same category
   Provided algorithm is already trained
   Will be done immediately after importing and class defining
   Show pop-up window for summary of what the algorithm has done
   After the implementation of VGG16, the remaining work for this milestone is to ensure the base web app's functionality works
   stabily before moving on to the next milestone.
   Completion by the mid February

5. Creation and Implementation of Active Learning Algorithm
   Creation of active learning algorithm will be done in Python
   Research into libraries for algorithm must be done
   Implement the algorithm with VGG16 and web app
   Start in the End of February with completion in about 1.5 months

6. Post Algorithm Implementation
   After initial algorithm classification, users can then manually edit, add, or reclassify classes
   Adding images after initial process will update the and re-run the algorithm on only added images
   Ability to save current work as a project
   Completion by mid March

7. Deployment
   Compile project
   Ensure the project can be ran with included contents
   Completion a week before course end

## Testing

1. Generation of Test Data:
   Testing the developed features will require the generation of training and test data. We will be using the Blender rendering engine to generate the data. This will give us more control over what objects are in the water pipeline that the application needs to identify and will simplify testing in the early stages

2. Testing for Accuracy of Machine Learning Model:
   We will conduct statistical tests to find the success rate of the application’s in terms of accurately identifying sequences of images where there is anomaly
   Testing for accuracy is not automated and will have to be done manually unless we can implement/develop an automated feature for tracking

3. Testing Functionality of Software
   Since for the preliminary version of the application we are using pre-existing refined algorithms like vgg16, there is little scope for testing on the backend, other than ensuring the implementation is correct
   Testing at this phase of development will be limited to troubleshooting the interface as we develop a basic front end that will implement the algorithm we are using

   Using REST for tesiting the API
   Regression testing to make sure new features do not break old code

4. Performance Testing (Tentative)
   Since the intended use for the application involves working with large amounts of data, load and stress testing will be conducted to find the failure point.

\*\*\* If performance is not satisfactory or upto client’s standards by these metrics we will investigate more machine learning techniques and algorithms to integrate into the system.

## Tech Stack

- Frontend: React.js (TypeScript)
- Graphics visualization: D3.js
- Linter: Eslint

- Backend: Django (Python), DjangoREST
- Formatter: Black
- Linter: Flake8
- Database: MongoDB + Vector Database
- Hosting Location: Locally
