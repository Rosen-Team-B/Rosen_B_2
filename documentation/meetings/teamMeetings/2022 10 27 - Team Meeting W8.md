# 2022/10/27 - Team Meeting W8

Created: October 27, 2022
Created by: Anonymous
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
