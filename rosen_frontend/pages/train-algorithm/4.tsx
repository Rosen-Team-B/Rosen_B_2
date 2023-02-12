import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { stepperSteps, stepperTexts } from "../../utils/stepperText";
const Step4 =()=>{
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep=3;
    const description= stepperTexts[activeStep];
    const router=useRouter();

    let video:File;
    const currentPage=4;
    const nextButton = () => {
        //const fs = require('fs');
        //fs.writeFile("../../utils/pagenumber.txt",2);
        router.push('/train-algorithm/5');
            
    } 
    const onSubmit= async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('video', video, 'toronto.mp4');
        fetch('http://127.0.0.1:8000/videoUpload/video/', {
            method:"POST",
            body: formData,
            mode: "no-cors",
        }
        ).then((res)=>setDisableNext(false)).catch((err)=>(console.log("error")));


    }
    const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files!=null){
           video=e.target.files[0];
           
        }
        
    }
    const getPage=()=>{
        // const fs = require('fs');
        // const fileContents = fs.readFileSync("../../utils/pagenumber.txt", { encoding: "utf8" })
        // return parseInt(fileContents);
        return 1;
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
                        <br />
                        <form id="ref-image-upload" encType="multipart/form-data" onSubmit={(e) =>onSubmit(e)}>
                            <input type="file" name="image" accept="image/*"required onChange={(e)=>onChange(e)}/>
                            <Button type="submit">
                                Submit
                            </Button>
                        </form>
            </div>
            <Button onClick={nextButton} disabled={disableNext}>
                Next
            </Button>
        </div> 
        
    );

}
export default Step4;