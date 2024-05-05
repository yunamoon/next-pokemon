import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
export const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#efaa75",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#efaa75",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3F4364",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
