import React from 'react';
import ProgressiveStepper from "../components/ProgressiveStepper";
import {Button, Step, StepLabel, Stepper, TextField} from "@mui/material";
import {stepperTexts,stepperSteps} from "../utils/stepperText" 
import { LinearProgress } from '@mui/material';
import selectableImageGallery from './selectableImageGallery';
import SelectableImage from '../components/ProgressiveStepper/selectableImage';

const TrainAlgorithm = () => {
    const [disableNext, setDisableNext] = React.useState(true);
    const [activeStep, setActiveStep] = React.useState(0);
    

    /** Handle Functions */
    const nextButton = () => {
        if(activeStep==stepperSteps.length - 1)
        window.location.href='/step5page'

        activeStep < stepperSteps.length - 1
            ? setActiveStep(activeStep + 1)
            : setActiveStep(activeStep);
            setDisableNext(true);
    }

    const backButton = () => {
        setDisableNext(true);
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
                            <input type="file" accept="video/"required onInput={() =>setDisableNext(false)}/>
                        </form>

                    </div>

                )
                

            }
            break;
            case 1:{
                
                return(
                    <div>
                        <p>{description}</p>
                        <Button onClick={()=>setDisableNext(false)}>OK</Button>
                        <LinearProgress variant = "determinate" value={disableNext?0:100}/>
                    </div>

                )
            }
            break;
            case 2:{
                ()=>setDisableNext(false);
                return(
                    <div>
                        <p>{description}</p>
                        <Button onClick={()=>setDisableNext(false)}>OK</Button>
                        <LinearProgress variant = "determinate" value={disableNext?0:100}/>
                    </div>

                )
            }
            case 3:{

                ()=>setDisableNext(true);

                return(
                    
                    <div>
                        <p>{description}</p>
                        <br />
                        <form action="" method="post">
                            <input type="file" accept="image/" required onInput={() =>setDisableNext(false)}/>
                            <TextField
                                id="reference-image-label"
                                label="label"
                                defaultValue="reference1"
                            />
                        </form>
                    </div>

                )

            }
            default:{
                {
                    return(
                        <br />
                    )
                }
            }
                
        }

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


