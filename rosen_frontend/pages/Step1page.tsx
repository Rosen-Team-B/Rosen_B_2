import { Button, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import { stepperSteps, stepperTexts } from "../utils/stepperText";

const Step1 =()=>{
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep=0;
    const description= stepperTexts[activeStep];
    const nextButton = () => {
            setDisableNext(true);
    }
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel={true}>
                {stepperSteps.map((label) => (
                    <Step key={label} >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                
            <p>{description}</p>
                        <br />
                        <form id="video-upload" action="" method="post">
                            <input type="file" accept="video/"required onInput={() =>setDisableNext(false)}/>
                        </form>

            </div>

            <Button type="submit" onClick={nextButton} disabled={disableNext}>
                Next
            </Button>
        </div> 
        
    );

}
export default Step1;