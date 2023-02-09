import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { stepperSteps, stepperTexts } from "../../utils/stepperText";
const Step1 =()=>{
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep=0;
    const description= stepperTexts[activeStep];
    
    const fs = require('fs');

    const router=useRouter();

    let video:File;
    const currentPage=1;
    const nextButton = () => {
        fs.writeFile("pagenumber.txt",2);
        router.push('/train-algorithm/3');
            
    }
    const onSubmit= async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('video', video, 'toronto.mp4');
        const resp= fetch('https://127.0.0.1:8000/videoUpload/video/', {
            method:"POST",
            body: formData,
        }
        )
        await (await resp).text();
        return (await resp).ok;


    }
    const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files!=null){
           video=e.target.files[0];
           
        }
        
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
                        <br />
                        <form id="video-upload" encType="multipart/form-data" onSubmit={(e) =>onSubmit(e)}>
                            <input type="file" name="video" accept="video/*"required onChange={(e)=>onChange(e)}/>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
            </div>
            <Button type="submit" form-id="video-upload" onClick={nextButton} disabled={disableNext}>
                Next
            </Button>
        </div> 
        
    );

}
export default Step1;