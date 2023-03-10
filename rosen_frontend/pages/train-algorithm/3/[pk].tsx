import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SelectableImageGallery from "../../../components/ProgressiveStepper/selectableImageGallery";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { stepperSteps } from "../../../utils/stepperText";
import SelectableImage from "../../../components/ProgressiveStepper/selectableImage";
const Step5 = () => {

    const activeStep = 2;
    const router=useRouter();
    const pk= router.query.pk;

    const[paths,setpaths]=React.useState([""]);
    
    useEffect(()=>{
      fetch(("http://localhost:8000/videoUpload/reference_image/1/deepImageSearch"))
    .then(res=> res.json())
    .then( data=>{

        var i=0;
        var newpaths=new Array(Object.keys(data).length)
        for(var key in data){
            if(data.hasOwnProperty(key)){
                newpaths[i++]=data[key]
            }
        }
        console.log("newpaths");
        setpaths(newpaths);
    })
    .catch(err=>{
      console.log("error");
    })
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
            {paths.map((path) => SelectableImage(path))}
        </div>
        <Button onClick={finish}>
          Finish
        </Button>
      </div>
    )
}
export default Step5;