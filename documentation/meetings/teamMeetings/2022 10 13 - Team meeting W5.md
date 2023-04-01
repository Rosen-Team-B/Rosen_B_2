# 2022/10/13 - Team meeting W5

Created: October 13, 2022
Created by: Anonymous

Feedback:

- Ali did well in taking control and responsibility for questions
- Communication between the project manager and liaison could be improved
- Not enough work with DevOps and QA for problems or notes to be made
- Communication overall has improved since last week but still needs improvement (falling behind compared to other teams)
- Going forward in client meetings, clear explanations on questions should be laid out before asking
- Liaison should update on communication in comparison to other teams
- Find a solution for detailing questions mid-meeting (between Liaison and project manager)

Client Meeting:

- The database will point to local system
- Find a way to collaborate/merge a database for our specific team data
- Database will take in Vectors
- Currently only one type of user (data scientist)
- Backend must support account privileges for added roles
- Asked performance was ambiguous and was suggested to take a baseline reading
- Wait time will be at our group’s discretion
- Group isn’t responsible for refining algorithm
- User will only submit an image
- Try to add video support for web app functionality
- Labels can be assigned to an image (labels will be associated with objects in image and will help algorithm)
- Other teams may have further research on which algorithms to use and options
- Dockers and containers are allowed (just as long as it runs on a local machine)
- Data will either be provided by ROSEN (unlikely) or use Blender to create our own dataset
- Blender assets have been sent via Microsoft Teams and need to be experimented with (Jeena?)
- Wants timestamp for when object occurs in the video
- Expected simultaneous development of web app and algorithm implementation
- Team weekly meeting is good but further meetings for teamwork (coding) need to be scheduled
- Inquire further on the client’s request for simultaneous development for algorithm and web app
- Ask the client if they can render while we can write the scripts (the team’s devices won’t be strong enough to fully render the requested files)
- Jeena can research into rendering for blender

Database to use:

- MySQL
- MongoDB
- PostgreSQL
- Amazon S3
- TASK: Research into potential databases to use that are efficient for images and is free
  DFD:

- Google Doc with a draft of the requirements report
  - The project Manager still has it in progress but work on it will start when the organization is complete
- Make an active learning algorithm from scratch (separate from VGG16)
- VGG16 is a pre-trained algorithm that just needs to be implemented
- DFD will showcase features and milestones for the project
- Level 0:
  - Data scientists will interact with management system
  - upload images to VGG16 for uploaded images to be classified
  - VGG16 will label and sort images with corresponding labels
  - System will turn the image into vectors and let VGG16 take over
  - The user will upload an image and classification name for training learning algorithm
  - Learning algorithm will predict the classification when trained
  - If error then user will re-submit the image with correction (correct labelling)
- Level 1:
  - The user will upload an image and target classification (will store the image and label)
  - With stored images and classifications, train learning algorithm models
  - Pick the best-trained models
  - Predict the image’s class with algorithm and output to the user
  - If incorrect labelling occurs, then re-submit the image and label

Milestones:

- Gather information (requirements, resources) - to be completed this week
- Design user interface - two weeks from now
- Pre-algorithm coding (base functionality complete) - mid/late December
- VGG16 implementation - late January
- Re-design UI
- Active learning algorithm creation and implementation - TBD (late Feb?)
- Re-design UI (again)
- Deployment/compilation (handoff) - Beginning of April

Testing:

- Unit testing for both frontend and backend
- GitHub actions for automated testing

Presentation:

- Recording and in-person
- Send audio clip for recording on Friday (post-midterm)
- Time allocation and content for in-person slides
  - Further content on tech stack
  - Speak on the slides you created
  - Framework for testing is based on frontend
