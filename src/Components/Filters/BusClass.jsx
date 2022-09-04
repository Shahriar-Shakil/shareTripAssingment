import {
  Box,
  Checkbox,
  Divider,
  Typography,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";
import { useTypography } from "../../stylesHook/stylesHook";

export default function BusClass() {
  const classes = useTypography({ fontSize: "16px" });

  return (
    <Box sx={{ py: 2 }}>
      <Typography className={classes.titleLg} component="p">
        Class
      </Typography>

      <FormGroup sx={{ py: 1 }}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          label="AC (40)"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
          label="Non AC (12)"
        />
      </FormGroup>
    </Box>
  );
}
