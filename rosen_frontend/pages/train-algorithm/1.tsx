import { Button, Step, StepLabel, Stepper, TextField, LinearProgress } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import PageHeader from "../../components/ProgressiveStepper/PageHeader/PageHeader";
import { stepperSteps, stepperTexts } from "../../utils/stepperText";
import styles from "../../styles/pages/train-algorithm.module.css";
import NumFieldInput from "../components/numField";

const Step1 = () => {
    const [disableNext, setDisableNext] = React.useState(true);
    const [disableSubmit, setDisableSubmit] = React.useState(true);
    const [progress,setProgress]=React.useState(0);
    const activeStep = 0;
    const description = stepperTexts[activeStep];
    const router = useRouter();
    const [video,setVideo]=React.useState<File>();
    const [interval,setvalueInterv]=React.useState("1000");
    const currentPage = 1;

    const nextButton = () => {
        //const fs = require('fs');
        //fs.writeFile("../../utils/pagenumber.txt",2);
        router.push('/train-algorithm/2');
    }
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log("submitting");
        console.log(video);
        const formData=new FormData();
        console.log(formData);
        console.log(typeof(video));
        formData.append('video', video as Blob);
        setDisableSubmit(true);
        formData.append('interval', interval);
        const loading_bar = setInterval(()=>{
            fetch(
                "http://localhost:8000/videoUpload/video/status/",
                {method: "GET"}
            )
                .then(res => res.json())
                .then(data => {
                    setProgress(data.percentage_complete);
                })
                .catch(err => console.log("error"));
        }, 5000);
        fetch('http://127.0.0.1:8000/videoUpload/video/', {
                method: "POST",
                body: formData,
            }
        ).then((res) => {
            if(res.ok){
                setDisableNext(false);
            setProgress(100);
            }
            else
            throw new Error('Something went wrong.');
            
        }).catch((err) => {
            console.log("error");
            setDisableSubmit(false);
            setProgress(0);
        
        }).finally(()=>{
            clearInterval(loading_bar);

        }
        )
            
    }

    const onVidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files != null) {
            if(e.target.files[0]!=null){
                setVideo(e.target.files[0]);
            console.log("changed file");
            console.log(video);
            setDisableSubmit(false);
            console.log(video);
            }
            else{
                setDisableSubmit(true);
            }
            
        }
        else{
            setDisableSubmit(true);
        }
        console.log(video);
    }
    const onIntChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!Number.isNaN(e.target.valueAsNumber)) {
            setvalueInterv(e.target.value);
        }
        else{
            setvalueInterv("1000");
        }
    }

  return (
    <>
      <PageHeader />
      <div className={styles.stepper}>
        <Stepper activeStep={activeStep} alternativeLabel={true}>
          {stepperSteps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={styles.mainContent}>
        <h3>{description}</h3>
        <br />
        <form
          id="video-upload"
          encType="multipart/form-data"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            type="file"
            name="video"
            accept="video/*"
            required
            onChange={(e) => onVidChange(e)}
          />
          {/* <input
            type="number"
            name="interval"
            onChange={(e) => onIntChange(e)}
          /> */}
          <NumFieldInput
          placeholder="1000"
            id="outlined-number"
            label="Frame Interval"
            type="number"
            size="small"
            onChange={(e: any) => onIntChange(e)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" disabled={disableSubmit}>
                        Submit
                    </Button>
        </form>
        <br />
        <LinearProgress variant="determinate" value={progress} />
        <div className={styles.nextBtn}>
          <Button onClick={nextButton} disabled={disableNext}>
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

    //window.onload=checkCorrectPage;
    

export default Step1;
