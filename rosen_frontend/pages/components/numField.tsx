import { TextField } from "@mui/material";

export default function numFieldInput() {
  return (
    <>
      <TextField
        id="outlined-number"
        label="Frame Interval"
        type="number"
        size="small"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </>
  );
}
