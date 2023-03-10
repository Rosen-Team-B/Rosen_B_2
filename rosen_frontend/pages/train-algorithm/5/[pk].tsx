import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SelectableImageGallery from "../../../components/ProgressiveStepper/selectableImageGallery";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { stepperSteps } from "../../../utils/stepperText";
const Step5 = () => {

    const activeStep = 4;
    const router=useRouter();
    const pk= router.query.pk;
    let paths=[""];
    fetch(("http://localhost:8000/videoUpload/reference_image/"+pk+"/deepImageSearch")).then(res=>{
        const data:any=res.json;
        var i=0;
        paths=new Array(Object.keys(data).length)
        for(var key in data){
            if(data.hasOwnProperty(key)){
                paths[i++]=data[key];
            }
        }
    })
    
    const finish = () => {
        alert("You have finished");
      };
    return (
        
        <div>
        <Stepper activeStep={activeStep} alternativeLabel={true}>
          {stepperSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          <p>Select the Images</p>
          <br />
        </div>
        <div>
            {SelectableImageGallery(paths)}
        </div>
        <Button onClick={finish}>
          Finish
        </Button>
      </div>
    )
}
export default Step5;