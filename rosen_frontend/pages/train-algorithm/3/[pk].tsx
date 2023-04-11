import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {Button, Grid, Step, StepLabel, Stepper} from "@mui/material";
import {stepperSteps, stepperTexts} from "../../../utils/stepperText";
import SelectableImage from "../../../components/ProgressiveStepper/selectableImage";
import PageHeader from "../../../components/ProgressiveStepper/PageHeader/PageHeader";
import styles from "../../../styles/pages/train-algorithm.module.css";
import {deleteAllData} from "../../../utils/deleteAllData";
import CircularProgress from '@mui/material/CircularProgress';


interface ImageObject {
    location: string;
    timestamp: string;
    selected: boolean;
}

const Step5 = () => {
    const activeStep = 2;
    const router = useRouter();
    const pk = router.query.pk;

    const [imgObjs, setImgObjs] = React.useState<ImageObject[]>([])
    const [selectedImgObjIds, setSelectedImgObjIds] = React.useState<string[]>([])
    const [loading, setLoading] = React.useState<boolean>(true)

    useEffect(() => {
        if (!router.query.pk) {
            return
        }
        fetch(("http://localhost:8000/videoUpload/reference_image/" + pk + "/deepImageSearch"))
            .then(res => res.json())
            .then(data => {
                setImgObjs(Object.values(data))
                setSelectedImgObjIds([])
                console.log("initialized displayed image path.");
            })
            .catch(err => {
                console.log("error");
            })
            .finally(() => {
                setLoading(false)
            })
    }, [pk])

    const updateSelectedImage = (path: string) => {
        const newSelectedImgObjIds = [...selectedImgObjIds]
        const selectImgIndex = newSelectedImgObjIds.indexOf(path)
        if (selectImgIndex === -1)
            newSelectedImgObjIds.push(path)
        else
            newSelectedImgObjIds.splice(selectImgIndex, 1)

        setSelectedImgObjIds(newSelectedImgObjIds)
    };

    const download = () => {
        const csvHeader = "path,timestamp\n";
        const csvContent = selectedImgObjIds.reduce((csvContent, selectImgObjId) => {
            const obj = imgObjs.find((imgObj: ImageObject) => imgObj.location === selectImgObjId)
            console.log(obj, selectImgObjId)
            return csvContent + `${obj.location},${obj.timestamp}\n`
        }, `data:text/csv;charset=utf-8,${csvHeader}`)
        const encodedURI = encodeURI(csvContent);
        const windowProxy = window.open();
        if (windowProxy)
            windowProxy.location = encodedURI

    };

    const finish = async () => {
        await deleteAllData()
        router.push("/")
    }

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
                <h3>{stepperTexts[activeStep]}</h3>
                <br/>
                {loading &&
                    <>
                        <CircularProgress/>
                        <div>Loading...</div>
                    </>

                }
                {!loading &&
                    <><Grid container rowSpacing={1} columnSpacing={1} justifyContent={"center"}>
                        {imgObjs.map(imgObj =>
                            <Grid key={imgObj.location} item>
                                <SelectableImage
                                    pathname={imgObj.location}
                                    isSelected={selectedImgObjIds.includes(imgObj.location)}
                                    updateSelectedImage={updateSelectedImage}
                                />
                            </Grid>
                        )}
                    </Grid>
                        <div className={styles.nextBtn}>
                            <Button onClick={finish}>Back to homepage</Button>
                            <Button onClick={download}> Export CSV</Button>
                        </div>
                    </>
                }
            </div>
        </>
    )
}
export default Step5;