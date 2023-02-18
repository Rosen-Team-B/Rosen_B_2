# Team meeting Feb 16th.

## Preparation for peer testing in mid March:
-	First week of March: we need to have a fully functional product.
-	Second week of March: this is the time to fix minor bugs and touch on styling
Update on the switch of the database:
-	Lydia met with some problem. To stay on schedule, if she can’t debug by tonight, we will use djnago default database. It works, just not as scalable, and she will continue with her next task which is the API to identify with step the user is on.
## Deep image search:
-	With the provided library, it only takes 1 image everytime, so this is an issue. Either we modify the library risking that it might work, we write something from scrach, or try parallel programming.
-	The deep image search need to work with images path. Brenden suggest that we grab the absolute path directly and not through django models for now to save time, and optimize when we have time.
