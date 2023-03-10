import  React, { useEffect, useRef } from 'react';
import { Box, Card, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Image from 'next/image';
const SelectableImage= (pathname: string) => {

const width=250;
const height=250;



const checkboxref=useRef(null);

const buttonClicked = () => {

    if(checkboxref.current!=null){
        
    }
    console.log("clicked");
}
    return(
        <Box style={{position : 'relative' , top: '0%',left:'0%'}} sx={{ bgcolor: 'white' ,display: 'flex' , maxWidth: width }}>
            <img onClick={buttonClicked} src={pathname} width={width} height={height} alt={'bro'}/>
           <Checkbox ref={checkboxref} sx= {{position: 'absolute', top: '0%', right:'0%'}}/>
        </Box>
        

    )
};


export default SelectableImage;