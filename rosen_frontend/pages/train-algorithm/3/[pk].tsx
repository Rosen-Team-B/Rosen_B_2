import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Button, Grid, Step, StepLabel, Stepper} from "@mui/material";
import {stepperSteps, stepperTexts} from "../../../utils/stepperText";
import SelectableImage from "../../../components/ProgressiveStepper/selectableImage";
import PageHeader from "../../../components/ProgressiveStepper/PageHeader/PageHeader";

const Step5 = () => {

    const activeStep = 2;
    const router = useRouter();
    const pk= router.query.pk;

    const [paths, setPaths] = React.useState([""]);

    useEffect(() => {
        fetch(("http://localhost:8000/videoUpload/reference_image/" + pk + "/deepImageSearch"))
            .then(res => res.json())
            .then(data => {

                var i = 0;
                var newpaths = new Array(Object.keys(data).length)
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        newpaths[i++] = data[key]
                    }
                }
                console.log("newpaths");
                setPaths(newpaths);
            })
            .catch(err => {
                console.log("error");
            })
    }, [pk])

    const finish = () => {
        alert("You have finished");
    };
    return (

        <div>
            <PageHeader/>
            <Stepper activeStep={activeStep} alternativeLabel={true}>
                {stepperSteps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                <p>{stepperTexts[activeStep]}</p>
                <br/>
            </div>
            <Grid container rowSpacing={1} columnSpacing={1}>
                {paths.map((path) => <Grid item> {SelectableImage(path)} </Grid>)}
            </Grid>
            <Button onClick={finish}>
                Finish
            </Button>
        </div>
    )
}
export default Step5;