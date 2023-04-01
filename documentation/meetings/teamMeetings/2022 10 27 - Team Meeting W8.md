# 2022/10/27 - Team Meeting W8

Created: October 27, 2022
Created by: Brenden T
Tags: Team Meeting

Meeting time: Oct. 27th 17:00-18:45

Meeting location: Online through discord

Attendees: Lydia, Brenden, Ali, Jeena

Note Taker: Brenden

# Meeting Notes

- Feedback:
    - everyone is working well and has no complaints - Lydia
    - we seem to be behind compared to other teams and other projects - Ali
    - not much in terms of activities so no highlighting comments or complaints - Brenden
    - No complaints - Jeena
- Client meeting:
    - Went well overall
    - this week all teams are in the same meeting
    - The website should show selected photos as a preview
        - Users should be able to expand photos
    - AL equivalent amount of weight per photo selected
    - The user should be able to de-select photos
    - The client is concerned about querying db
        - test for how long we can retrieve images from the algorithm
    - make an issue for preliminary testing
    - We will have to figure out what queries the algorithm will output
    - hyper-plane or threshold needs to be re-trained
    - The user group will be data evaluators and/or scientists
        - Not certain how many users
        - there should only be one active user at a time
    - The data evaluator will label timestamps from videos
    - Data scientists will train and might give the instance of the algorithm to the evaluator
    - VGG16 will be using up to the last layers, not the first layer
    - baseline 5 second(ish) for image retrieval
        - prioritize effective and efficient results
        - perhaps forgo accuracy for time?
    - client is concerned about how efficient MongoDB is for querying images
    - The client is concerned about milestones being too linear for testing
- Docker Updates:
    - docker may not play well with MAC OS
    - docker may be an issue with the setup
    - docker can be beneficial for deployment
    - helpful for development and unification of multiple users
    - **Agreement to use docker**
- Framework:
    - button for uploading inspection video to vectorize
        - frontend based
    - no page for uploading the initial video?
    - add videos in the backend through the admin page
        - backend based
    - frontend button to parse video to images
    - separate button to vectorize
        - disables button afterwards
    - button is needless as the process is already a given and could be seen as actively interfering with the work process
        - have it fully frontend no backend work
    - give status messages
    - Have a begin process button and give visual message feedback for user clarification
        - maybe a progress bar?
    - after an image has been uploaded to the backend, the frontend will give confirmation of the image/video and then have a “begin process” button with a progress bar with notification messages on process status
    - new tabs for checking inspection images, checking vectorization, reference image submission, and image selection
    - make a new box/input button for label upload
    - circle-based progress bar may become a problem for re-training the algorithm
    - image should show the timestamp and what the algorithm has labelled the image
        - have a separate window for additional info
        - click on the photo itself for a pop-up with additional info and an expanded image
        - timestamp on the bottom right of images (for the selection screen)
        - top right for selection indication (for selection screen)
    - maybe have a static amount of images the algorithm will output (like max 10 or 20)
        - infinite scroll
        - pages?
    - static or dynamic image loading?
        - decision: dynamic infinite scroll
    - for testing have a variable on maximum output and for the final product have a hardcoded maximum output variable
    - for vectorization we should have a vectorization of every other frame or skip a certain amount of frames as a lot of frames may end up being very similar to one another
        - skip frame variable
    - skip frame variable implemented in the algorithm
    - display the current information for each timestamped photo
    - button to terminate algorithm training (P1)
        - wrap up algorithm training
        - download algorithm (P3)
- Milestones:
    - milestones are linear
        - client is concerned as testing will only occur during the end
    - interweaving milestones may take too long
    - Our understanding of the milestones is that testing will occur at every step and not only at the end
    - the milestones are in order and in priority order in structure with the project description
        - no point to make an algorithm without app creation
- Gitstats:
    - everyone has to have 50 for a personal score to pass
    - group score?
    - task per member:
        - frontend: Jeena
            - frontend component library research
        - backend: Ali
        - Database: Lydia
        - docker: Brenden
    - starting next week TA will check in on Fridays