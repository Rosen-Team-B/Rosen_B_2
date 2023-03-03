import { Button, LinearProgress, Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import { stepperSteps, stepperTexts } from "../../utils/stepperText";
const Step3 = () => {
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep=2;
    const description= stepperTexts[activeStep];
    const currentPage=3;
    
    
    const router=useRouter();

    /** Handle Functions */
    const nextButton = () => {
        router.push('/train-algorithm/4');
    }
    const getPage=()=>{
        return 3;
    }
    useEffect(() => {
        const page=getPage();
        if(page!=currentPage)
        {
            
            router.push('/train-algorithm/'+page);
        }
      }, []);

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
                        <Button onClick={()=>setDisableNext(false)}>OK</Button>
                        <LinearProgress variant = "determinate" value={disableNext?0:100}/>
                    

                
            </div>

            <Button onClick={nextButton} disabled={disableNext}>
                Next
            </Button>

        </div> 
        
    );
};

export default Step3;


