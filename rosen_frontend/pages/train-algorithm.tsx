import React from 'react';
import ProgressiveStepper from "../components/ProgressiveStepper";
import {Button, Step, StepLabel, Stepper} from "@mui/material";
import {stepperTexts,stepperSteps} from "../utils/stepperText" 


const TrainAlgorithm = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [disableNext, setDisableNext] = React.useState(true);

    /** Handle Functions */
    const nextButton = () => {
        setDisableNext(false);
        activeStep < stepperSteps.length - 1
            ? setActiveStep(activeStep + 1)
            : setActiveStep(activeStep);
    }

    const backButton = () => {
        activeStep >= 0 ? setActiveStep(activeStep - 1) : setActiveStep(activeStep);
    }

    //getting page data
    const getPageData = () =>{

        const description= stepperTexts[activeStep];

        switch(activeStep){
            case 0:{
                () => setDisableNext(true);
                return(
                    
                    <div>
                        <p>{description}</p>

                        <br />
                        <form action="" method="post">
                            <input type="file" accept='video/' required onInput={() =>setDisableNext(false)}/>
                        </form>

                    </div>

                )
                

            }
            break;
            case 1:{
                () =>setDisableNext(false);
                return(
                    <div>
                        <p>{description}</p>

                    </div>

                )
            }
            break;
            case 2:{
                () =>setDisableNext(false);
                return(
                    <div>
                        <p>{description}</p>

                    </div>

                )
            }
            case 3:{
                () =>setDisableNext(true);
                return(
                    <div>
                        <p>{description}</p>
                        <br />
                        <form action="" method="post">
                            <input type="file" accept='image/' required onInput={() =>setDisableNext(false)}/>
                        </form>
                    </div>

                )

            }
            default:{
                return(
                    <div>

                    </div>
                )
            }
        }

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
                {getPageData()}
            </div>

            <Button onClick={backButton}>
                Back
            </Button>
            <Button onClick={nextButton} disabled={disableNext}>
                {activeStep === stepperSteps.length - 1 ? 'Finish' : 'Next'}
            </Button>

        </div> 
        
    );
};

export default TrainAlgorithm;



/*
create enable next for every next button add it
function get page data wihthin the function use like 
switch to make each page and check if theres a file in the input 
for step 2 3 set it astrue in the beginning only




*/