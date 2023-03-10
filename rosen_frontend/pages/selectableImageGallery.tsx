import { Box, Grid, ImageList } from "@mui/material";
import { Container } from "@mui/system";
import SelectableImage from "../components/ProgressiveStepper/selectableImage";


const SelectableImageGallery = () => {
  const paths=["myimage.jpg","myimage.jpg","myimage.jpg","myimage.jpg"];;
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        float: "left",
        width: "25%",
      }}
    >


      <Grid container rowSpacing={1} columnSpacing={1} >
      {paths.map((path) => <Grid item> {SelectableImage(path)} </Grid>)}
      </Grid>
      
    </Box>



  );
};

export default SelectableImageGallery;
