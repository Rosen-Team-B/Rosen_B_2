import { Button } from "@mui/material";
import SelectableImage from "../components/ProgressiveStepper/selectableImage";

const step5page = () =>{

    var ImageData: string[] = [];

    const fetchImages = (k:number) =>{
        ImageData=[];
        for (var i = 1; i <= k; i++) {
            ImageData.push("name"+i);
         }
    }
    const getImageGallery= () =>{
        return(
            <div>
                {
                    ImageData.map((img)=>(
                        SelectableImage(img,img)
                    )
                    )
                }
            </div>
        )
    }

    return(
        <div>
            <Button>
                Fetch Images
            </Button>

        </div>
    )
}

export default step5page;


/*



*/