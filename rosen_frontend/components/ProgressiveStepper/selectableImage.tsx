import  React, { useEffect } from 'react';
import { Box, Card, Checkbox } from "@mui/material";
import Button from '@mui/material/Button';
import Image from 'next/image';
const SelectableImage= (pathname: string) => {

//const [selected, setSelected] = React.useState(false);
const width=250;
const height=250;
const buttonClicked = () => {
    //setSelected(!selected);
    console.log("clicked");
}
    return(
        <Box style={{position : 'relative' , top: '0%',left:'0%'}} sx={{ bgcolor: 'white' ,display: 'flex' , maxWidth: width }}>
            <img src={pathname} width={width} height={height} alt={'bro'}/>
           <Checkbox onChange = {buttonClicked} sx= {{position: 'absolute', top: '0%', right:'0%'}}/>
           
        </Box>
        

    )
};


export default SelectableImage;