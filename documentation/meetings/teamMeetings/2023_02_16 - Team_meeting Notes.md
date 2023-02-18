# Team meeting Feb 16th.

## Preparation for peer testing in mid March:
-	First week of March: we need to have a fully functional product.
-	Second week of March: this is the time to fix minor bugs and touch on styling
Update on the switch of the database:
-	Lydia met with some problem. To stay on schedule, if she can’t debug by tonight, we will use django default database. It works, just not as scalable, and she will continue with her next task which is the API to identify with step the user is on.
## Deep image search:
-	With the provided library, it only takes 1 image everytime, so this is an issue. Either we modify the library risking that it might work, we write something from scrach, or try parallel programming.
-	The deep image search need to work with images path. Brenden suggests that we grab the absolute path directly and not through django models for now to save time, and optimize when we have time.
## Separating step1:
-	For the code the backend is written right now, the API to upload image also includes splitting image which should be in step two. This should be fix or we have to think of a when to combine the both step and give loading status in the frontend, so users don’t freak out when the system is taking very long to upload and splitting images for 1 step.
## Work this & next week:
1. Getting the database sorted cuz docker work needs to be completed
2. APIs: connecting backend and frontend 
   1. 2 apis for deep image search – Ali, Brenden 
   2. 2 api for split & steps - Lydia
