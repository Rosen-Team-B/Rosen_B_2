import React, { useEffect } from "react";
import { useRouter } from "next/router";
const Step5 = () => {

    const router=useRouter();
    const pk= router.query.pk;

    return (
        <div>
            {pk}
        </div>
    )
}
export default Step5;