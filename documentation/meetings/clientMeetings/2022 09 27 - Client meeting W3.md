# Meeting time: Sept. 27th 13:00-14:00

Meeting location: OM007

Attendees: Rosen: Matthias; Team B: All members attended

Note Taker: Lydia

## Summary of the meeting:

1. Intro of what Rosen does
2. Show us the pictures & video captured in the water pipleine
3. Discussion of what is expected from us
4. Q&A 
5. Closing discussions

## Detail notes:

### Background knowledge of the company & what they are doing:
- A machine goes into the water pipeline for inspection.
- The machine has 6 cameras (pics of the inside of the pipe), piecing all 6 pics, you get a 360 view of the inside. Or just 1 front camera
- The machine flows with the water in the pipe so all the areas in the pipeline be taken pictures/recorded.
- Inspection for any abnormality such as leaves, plastic bags, connection cracks between pipeline that would result in leakage, fish, etc.
- Inspection also for places to check such as man whole,
- Info about water pipelines not on the official website since this part is still in production, and only in oil pipeline on the website
- Looking for a web-app that will integrate with their current workflow that will facilitate.

Other terms not understood: 

- MX? sealing
- blender? Not a really important piece of software

### What Rosen wants from us:

- Design a web app that will be used by their data scientists (who know python) to input a random picture and display images from the db, so they can classify images and train their machine algorithm which inspects within the water pipelines.
- The target user for this web app will be Rosen’s data scientist, so any future discussion of users refers to their data scientists.
- The classes are not predefined. They are defined by the user’s decisions, supported by an active learning algorithm.
- Efficiency is key point is discussions with client, as

→ Example: I have an image of a leave, help me find all the leaves in the water pipeline.

- Focus on software eng. not algorithm (rosen don’t have enough data to trian the algo yet); algo later in the semester maybe if we are ahead of the schedule
- This code will be used going forward in ROSEN, so code should be
    - clean code: understandable (give documentation or good comments for ppl knowing python easy)
    - backend: python (so their data scientist can take a look if anything)

### Some ideas of the web app:

- using this image (random image), can you find all the image similar in the db, display, and user click on some image that is correct ( to train the algorithm), submit to retrain the algorithm
- Users may want to download the list of image or the location of where the images are on the db given a random image (target: like fish)
- Efficiency is important: thousands of image in the db and to be display in the frontend
- 2 person on the same data at the same time (Rosen not thought about it, maybe we need to restrict)
- Mentioned using Python as backend language for expansion when project is over?


### About algorithms: 
- Basic concepts about their algorithms: Machine learning models (in trainning) : active learning [not in the scope of our project]: display imgae > give labels > propose new places to be interested (to be notice) in the pipeline.
- There will be 2 algorithms:
    - (it’s online) VGG16: ***object detection and classification algorithm*** which is able to classify 1000 images of 1000 different categories with 92.7% accuracy
    - there’s another one: not important to us  —- stick to vgg16 for now (since algorithm is not the focus)
- Rosen will give us data on…..? the images they have…? …vectors of image to train…?

### Q&A:

- Security issue: Only rosen users can use this (this part of the website will be integrated to the original website), making a new one may cause collision

### Closing discussions:
Agreements:

- 10hrs per person a week
- Every 2 week for a report to match the scrum flow

Next Meeting:

- Matthias will add all members in all teams into a MS Team as a communication channel with Rosen for exchane data and quick questions before meetings
- Client liasons should collect email from all team members to get into MS teams
- Future meetings online, in-person on campus, or in-person at the downtown office can be discussed and arranged.
- The client meeting will be set on every Tue. 13:30-14:30
- The date of the next meeting: TBA (will be discussed on MS Team)