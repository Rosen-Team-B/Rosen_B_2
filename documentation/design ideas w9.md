<a href="https://www.google.com/](https://www.figma.com/file/4YUn6GDTC9cfB3TkmRmvx0/Wireframe%2FUI-mokckup?node-id=37%3A2" target="_blank">Link to mock up page </a>  
key points for the UI:
5 main pages: representing each step for the main tasks for the data scientists

Step1: video in DB  
- instructions: ask the data scientist (the main user) to check if the inspection video is in the database. Provide instructions to help them navigate to django/admin to check and add if needed.  
- next button: the data scientist will click the "next" button to go the next page. A warning pop up will show up saying there's no way to go back to the previous pages since that we are not planning to make a "back" button. It will mess up the work flow and the program.  
 
 Step2: parse the video to images  
- instructions: add instruction to describe what this step does.    
- "Parse the video" button: ask the data scientist click on the "Parse the video" button to parse the inspection video in the database into a lot of images.
- next button: the data scientist will click the "next" button to go the next page. A warning pop up will show up saying there's no way to go back to the previous pages since that we are not planning to make a "back" button. It will mess up the work flow and the program.  

Step2.5: loading page

Step3: vectorize images   
- instructions: add instruction to describe what this step does.  
- "Vectorize the images" button: ask the data scientist click on the "Parse the video" button to parse the inspection video in the database into a lot of images.    
- next button: the data scientist will click the "next" button to go the next page. A warning pop up will show up saying there's no way to go back to the previous pages since that we are not planning to make a "back" button. It will mess up the work flow and the program.  

Step3.5: loading page (reused)

Step4: Upload the reference image page
- instructions: add instruction to describe what this step does.  
- in take inputs: (1) the name of the classification (2) an "upload image" button: to upload the reference image (3 - optional) define the number of images to display in the next page.  
- "Upload" button: ask the data scientist to click on this button once all the inputs are there.  

Step4.5: loading page (reused)


Step5: The training page.   
> Three taps or expandables (1) instructions tab (2) main windows (3 - optional) info of the algorithm in the current iteration  
> The first iteration vs second+ iterations    

[First iteration]
first tap/expandable  
	- instructions: add instruction to describe what this step does.  
second tap/expandable  
	- click-able images in 1 scroll-able window  
	- a empty column: only when a image is selected will info of the image display on this column  
	- "Retain button": show a warning button saying there is no undo pass this point.  
	- (not now) "Termination" button  
	- (not now) "Start new" button  
	
-> Step5.5: loading page (reused)

[Second+ iterations]  
first tap/expandable  
	- instructions: add instruction to describe what this step does.  
second tap/expandable  
	- click-able images in 2 scroll-able windows. (1) newly queried images (queried this iteration) (2) odd images queried from previous iterations.  
	- a empty column: only when a image is selected will info of the image display on this column  
	- "Retain button": show a warning button saying there is no undo pass this point.  
	- (not now) "Termination" button	
	- (not now) "Start new" button  
	
-----------
Global componenets:
1. heading: Rosen icon on the left & user on the right. In the future if time allows, add onto user (dropdown).
2. breadcrume
3. global red button: main function button (need to pass function down when used)
4. global next button: (what color? transparent?)
5. template for page 1- 4
------------
Other thoughts:
