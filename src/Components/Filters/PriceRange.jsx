import { Box, Divider, Slider, Typography } from "@mui/material";
import React from "react";
import { useTypography } from "../../stylesHook/stylesHook";
export default function PriceRange() {
  const classes = useTypography({ fontSize: "16px" });
  const [value, setValue] = React.useState([500, 6000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ py: 2 }}>
      <p className={classes.titleLg}>Price Range</p>
      <Divider light sx={{ mt: 1 }} />
      <Box sx={{ py: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p className={classes.titleXs}>Minimum Price</p>
            <p className={(classes.titleLg, classes.fontWeight700)}>
              {value?.[0]}
            </p>
          </div>
          <div>
            <p className={classes.titleXs}>Maximum Price</p>
            <p className={(classes.titleLg, classes.fontWeight700)}>
              {value?.[1]}
            </p>
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
