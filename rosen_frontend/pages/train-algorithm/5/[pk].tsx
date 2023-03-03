import React, { useEffect } from "react";
import { useRouter } from "next/router";
import SelectableImageGallery from "../../../components/ProgressiveStepper/selectableImageGallery";
const Step5 = () => {

    const router=useRouter();
    const pk= router.query.pk;
    const paths=["",""];
    fetch(("http://localhost:8000/videoUpload/reference_image/"+pk+"/deepImageSearch"))

    return (
        <div>
            {SelectableImageGallery(paths)}
        </div>
    )
}
export default Step5;