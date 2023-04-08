import { TextField } from "@mui/material";

const NumFieldInput = ({
  onChange,
  id,
  label,
  size,
  type,
}: any): React.ReactElement => {
  return (
    <TextField
      id={id}
      label={label}
      type={type}
      onChange={onChange}
      size={size}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default NumFieldInput;
