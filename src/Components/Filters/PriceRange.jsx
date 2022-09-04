import { Box, Divider, Slider, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { useTypography } from "../../stylesHook/stylesHook";

export default function PriceRange() {
  const classes = useTypography({ fontSize: "16px" });
  const [value, setValue] = React.useState([500, 6000]);
  // console.log(classes);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ py: 2 }}>
      <Typography className={classes.titleLg}>Price Range</Typography>
      <Divider light sx={{ mt: 1 }} />
      <Box sx={{ py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography className={classes.titleXs}>Minimum Price</Typography>
            <Typography className={(classes.titleLg, classes.fontWeight700)}>
              {value?.[0]}
            </Typography>
          </div>
          <div>
            <Typography className={classes.titleXs}>Maximum Price</Typography>
            <Typography className={(classes.titleLg, classes.fontWeight700)}>
              {value?.[1]}
            </Typography>
          </div>
        </Box>

        <Slider
          size="small"
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          max={6000}
          min={500}
        />
      </Box>
    </Box>
  );
}
