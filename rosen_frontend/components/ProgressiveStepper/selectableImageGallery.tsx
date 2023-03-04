import { Box, Grid, ImageList } from "@mui/material";
import { Container } from "@mui/system";
import SelectableImage from "./selectableImage";
//const timeStamps = ["1", "2", "3"];
const SelectableImageGallery = (paths:string[]) => {
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        float: "left",
        width: "25%",
      }}
    >
      {paths.map((path) => SelectableImage(path))}
    </Box>
  );
};

export default SelectableImageGallery;
