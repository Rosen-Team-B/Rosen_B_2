import { Button, LinearProgress, Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import { stepperSteps, stepperTexts } from "../../utils/stepperText";
const TrainAlgorithm = () => {
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep=1;
    const description= stepperTexts[activeStep];
    const currentPage=2;
    const fs = require('fs');
    
    const router=useRouter();

    /** Handle Functions */
    const nextButton = () => {
        
        fs.writeFile("pagenumber.txt",3);
        router.push('/train-algorithm/3');
    }
    const getPage=()=>{
        
        const fileContents = fs.readFileSync("pagenumber.txt", { encoding: "utf8" })
        return parseInt(fileContents);
    }
    const checkCorrectPage =()=>{
        const page=getPage();
        if(page!=currentPage)
        {
            
            router.push('/train-algorithm/'+page);
        }
        
    }

    return (
        <div onLoad={checkCorrectPage}>
            <Stepper activeStep={activeStep} alternativeLabel={true}>
                {stepperSteps.map((label) => (
                    <Step key={label} >
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                        <p>{description}</p>
                        <Button onClick={()=>setDisableNext(false)}>OK</Button>
                        <LinearProgress variant = "determinate" value={disableNext?0:100}/>
                    

                
            </div>

            <Button onClick={nextButton} disabled={disableNext}>
                Next
            </Button>

        </div> 
        
    );
};

export default TrainAlgorithm;


