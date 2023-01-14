import { Box, Grid, ImageList } from "@mui/material";
import { Container } from "@mui/system";
import selectableImage from "./selectableImage";

const selectableImageGallery= (timeStamp: string) => {

return (
    <Box display="grid" gap={2}>
        {selectableImage("img1")}
        {selectableImage("img2")}
        {selectableImage("img3")}
        {selectableImage("img4")}
        {selectableImage("img5")}
        {selectableImage("img6")}
        {selectableImage("img7")}
        {selectableImage("img8")}
    </Box>
  
)

}

export default selectableImageGallery;