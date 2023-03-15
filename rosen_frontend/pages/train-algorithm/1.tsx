import {Button, Step, StepLabel, Stepper} from "@mui/material";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import PageHeader from "../../components/ProgressiveStepper/PageHeader/PageHeader";
import {stepperSteps, stepperTexts} from "../../utils/stepperText";
import styles from '../../styles/pages/train-algorithm.module.css'


const Step1 = () => {
    const [disableNext, setDisableNext] = React.useState(true);
    const activeStep = 0;
    const description = stepperTexts[activeStep];
    const router = useRouter();
    let video: File;

    const currentPage = 1;
    const nextButton = () => {
        //const fs = require('fs');
        //fs.writeFile("../../utils/pagenumber.txt",2);
        router.push('/train-algorithm/2');

    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video', video, 'toronto.mp4');
        fetch('http://127.0.0.1:8000/videoUpload/video/', {
                method: "POST",
                body: formData,
            }
        ).then((res) => setDisableNext(false)).catch((err) => (console.log("error")));
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files != null) {
            video = e.target.files[0];
        }
    }

    const getPage = () => {
        // const fs = require('fs');
        // const fileContents = fs.readFileSync("../../utils/pagenumber.txt", { encoding: "utf8" })
        // return parseInt(fileContents);
        return 1;
    }

    useEffect(() => {
        const page = getPage();
        if (page != currentPage) {

            router.push('/train-algorithm/' + page);
        }
    }, []);
    //window.onload=checkCorrectPage;

    return (
        <>
            <PageHeader/>
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
                <br/>
                <form id="video-upload" encType="multipart/form-data" onSubmit={(e) => onSubmit(e)}>
                    <input type="file" name="video" accept="video/*" required onChange={(e) => onChange(e)}/>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
                <div className={styles.nextBtn}>
                    <Button onClick={nextButton} disabled={disableNext}>
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Step1;