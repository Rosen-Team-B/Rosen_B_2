import React from 'react';
import {Button, Step, StepLabel, Stepper} from "@mui/material";


const steps = [
    "Step 1: Video in Database",
    "Step 2: Video Parsing",
    "Step 3: Image Vectorizing",
    "Step 4: Upload the Reference",
];

const ProgressiveStepper = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    /** Handle Functions */
    const nextButton = () => {
        activeStep < steps.length - 1
            ? setActiveStep(activeStep + 1)
            : setActiveStep(activeStep);
    }

    const backButton = () => {
        activeStep >= 0 ? setActiveStep(activeStep - 1) : setActiveStep(activeStep);
    }

    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            {/*TODO: should move the button component to the train-algorithm page */}
            <Button onClick={nextButton}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
    );
};

export default ProgressiveStepper;