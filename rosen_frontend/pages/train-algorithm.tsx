import React from 'react';
import ProgressiveStepper from "../components/ProgressiveStepper";
import {Button, Step, StepLabel, Stepper} from "@mui/material";
import {stepperTexts,stepperSteps} from "../utils/stepperText" ;
import Image from 'next/image'


const TrainAlgorithm = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    /** Handle Functions */
    const nextButton = () => {
        activeStep < stepperSteps.length - 1
            ? setActiveStep(activeStep + 1)
            : setActiveStep(activeStep);
    }

    const backButton = () => {
        activeStep >= 0 ? setActiveStep(activeStep - 1) : setActiveStep(activeStep);
    }


    return (
        <div>
            This should be the stepper page
            <Stepper activeStep={activeStep} alternativeLabel={true}>
                {stepperSteps.map((label) => (
                    <Step key={label} >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <p>{stepperTexts[activeStep]}</p>
            </div>

            <Button onClick={backButton}>
                Back
            </Button>
            <Button onClick={nextButton}>
                {activeStep === stepperSteps.length - 1 ? 'Finish' : 'Next'}
            </Button>
            { /* <Image src="/../public/myimage.jpg" alt="my image"  width={500} height={500}/>*/}
        </div> 
        
    );
};

export default TrainAlgorithm;