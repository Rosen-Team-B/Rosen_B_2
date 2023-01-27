import { Button } from "@mui/material";
import React from "react";
import SelectableImage from "../components/ProgressiveStepper/selectableImage";
import SelectableImageGallery from "../components/ProgressiveStepper/selectableImageGallery";
const Step5page = () =>{

    //const [ImageGallery, setImageGallery] = React.useState(selectableImageGallery([]));
    var ImageData: string[] = [];
   
    var ImageGallery=SelectableImageGallery(["1","2","3","4","5","9"]);
    
    const fetchImages = (k:number) =>  {
        ImageData=[];
        for (var i = 1; i <= k; i++) {
            ImageData.push("name"+i);
         }
         
    }
    const setImageGallery=() =>{
        ImageGallery=SelectableImageGallery(ImageData);

    }
    const onFetch =() =>{

        fetchImages(5);

    }
    return(
        <div>
            <Button onClick= {onFetch}>
                Fetch Images
            </Button>
            <div >
            {
                ImageGallery
            }
            </div>
            

        </div>
    )
}

export default Step5page;


/*



*/