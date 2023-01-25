import { Box, Grid, ImageList } from "@mui/material";
import { Container } from "@mui/system";
import SelectableImage from "./selectableImage";
const timeStamps = ["1", "2", "3"];
const selectableImageGallery = (path = "j") => {
  return (
    <Box
      display="flex"
      gap={2}
      sx={{
        float: "left",
        width: "25%",
      }}
    >
      {timeStamps.map((timeStamp) => SelectableImage(path, timeStamp))};
    </Box>
  );
};

export default selectableImageGallery;
