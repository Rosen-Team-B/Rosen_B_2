
 const stepperTexts = [
    "Confirm that the video exists in the database. Navigate to the Django Admin Page and ensure that the video is listed in “???” Supported formats are ???",
    "The video will now be parsed into images. Depending on the length of the video, this may take several minutes! Click Next to continue.",
    "The images generated from Step 2 will now be converted to vectors so they can be read by the machine learning algorithm. Depending on the number of images, this may take upto several minutes! Click Next to Continue",
    "Upload a reference image. The algorithm will return a gallery of images that are similar to the reference image. Supported formats are: ",
];

 const stepperSteps = [
    "Step 1: Video in Database",
    "Step 2: Video Parsing",
    "Step 3: Image Vectorizing",
    "Step 4: Upload the Reference",
];

export {stepperTexts, stepperSteps}