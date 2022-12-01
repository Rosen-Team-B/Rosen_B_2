import React from 'react';
import ProgressiveStepper from "../components/ProgressiveStepper";
import {Button, Step, StepLabel, Stepper} from "@mui/material";

const stepperSteps = [
    "Step 1: Video in Database",
    "Step 2: Video Parsing",
    "Step 3: Image Vectorizing",
    "Step 4: Upload the Reference",
];

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
            <Stepper activeStep={activeStep} alternativeLabel>
                {stepperSteps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {/*TODO:*/}
                {/*step1: add the instruction json file from the old repo here*/}
                {/*    => add it under utils, and as a ts file (not json)*/}
                {/*Step2: import the file here, and use .map() function (there's one right above: line31) to display the instructions.*/}
                {/*=> manually copy & paste is not what we want.*/}
            </div>

            <Button onClick={backButton}>
                Back
            </Button>
            <Button onClick={nextButton}>
                {activeStep === stepperSteps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
};

export default TrainAlgorithm;