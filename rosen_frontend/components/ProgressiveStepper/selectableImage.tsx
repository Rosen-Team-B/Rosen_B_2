import  React, { useEffect, useRef } from 'react';
import { Box, Card, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Image from 'next/image';
const SelectableImage= (
    pathname: string,
    isSelected: boolean,
    updateSelectedImage: (path: string) => void
) => {
    const width=250;
    const height=250;

    const buttonClicked = () => {
        updateSelectedImage(pathname)
        console.log("clicked");
    }
    return(
        <Box style={{position : 'relative' , top: '0%',left:'0%'}} sx={{ bgcolor: 'white' ,display: 'flex' , maxWidth: width }}>
            <img onClick={buttonClicked} src={pathname} width={width} height={height} alt={'Loading'}/>
           <Checkbox sx= {{position: 'absolute', top: '0%', right:'0%', pointerEvents: 'none'}} checked={isSelected}/>
        </Box>
        

    )
};


export default SelectableImage;