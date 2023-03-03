import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { stepperSteps, stepperTexts } from "../../utils/stepperText";
const Step4 = () => {
  const [disableNext, setDisableNext] = React.useState(true);
  const activeStep = 3;
  const description = stepperTexts[activeStep];
  const router = useRouter();
  let pk:number;
  let image: File;
  let label = "label1";
  const currentPage = 4;
  const nextButton = () => {
    //const fs = require('fs');
    //fs.writeFile("../../utils/pagenumber.txt",2);
    router.push("/train-algorithm/5/"+pk);
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("label", label);
    fetch("http://localhost:8000/videoUpload/reference_image/", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((res) => {
        setDisableNext(false);
        const data=res.json();
        

      })
      .catch((err) => console.log("error"));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      image = e.target.files[0];
    }
  };
  const labelUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    label = e.target.value;
  };
  const getPage = () => {
    return 4;
  };
  useEffect(() => {
    const page = getPage();
    if (page != currentPage) {
      router.push("/train-algorithm/" + page);
    }
  }, []);

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel={true}>
        {stepperSteps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <p>{description}</p>
        <br />
        <form
          id="ref-image-upload"
          encType="multipart/form-data"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={(e) => onChange(e)}
          />
          <input
            type="text"
            name="label"
            value={label}
            onChange={(e) => labelUpdate(e)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
      <Button onClick={nextButton} disabled={disableNext}>
        Next
      </Button>
    </div>
  );
};
export default Step4;
