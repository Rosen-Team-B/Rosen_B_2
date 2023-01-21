import  React from 'react';
import { Box, Card, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Image from 'next/image';
const selectableImage= (path: string, timeStamp: string) => {

const [selected, setSelected] = React.useState(false);
const pathname ="/../public/myimage.jpg";
const width=250;
const height=250;
const buttonClicked = () => {
    setSelected(!selected);
}

    return(
        <Box style={{position : 'relative' , top: '0%',left:'0%'}} sx={{ bgcolor: 'white' ,display: 'flex' , maxWidth: width }}>
            <Image onClick={buttonClicked} src={pathname} alt="my image"  width={width} height={height} style={{position: 'relative', top: '0%',left:'0%'}}/>
           <Checkbox id={timeStamp} onChange = {buttonClicked} checked= {selected} sx= {{position: 'absolute', top: '0%', right:'0%'}}/>
        </Box>

    )
};


export default selectableImage;