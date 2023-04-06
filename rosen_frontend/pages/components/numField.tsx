import { TextField } from "@mui/material";

const numFieldInput = ({
  onChange,
  id,
  label,
  size,
  type,
  InputLabelProps,
}: any): React.ReactElement => {
  return (
    <TextField
      id="outlined-number"
      label="Frame Interval"
      type="number"
      onChange={onChange}
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default numFieldInput;
