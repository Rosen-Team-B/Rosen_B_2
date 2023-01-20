import { Box, Grid, ImageList } from "@mui/material";
import { Container } from "@mui/system";
import selectableImage from "./selectableImage";

const selectableImageGallery= (path ="j", timeStamps = ["1","2","3",]) => {

return (
    <Box display="flex" gap={2} sx={{
        float: 'left',
        width: '25%',
      }}>
       {
       timeStamps.map((timeStamp) => (
        selectableImage(path,timeStamp)

       ))};


    </Box>
  
)

}

export default selectableImageGallery;