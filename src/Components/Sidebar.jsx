import * as React from "react";

import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTypography } from "../stylesHook/stylesHook";
import BoxUI from "./UI/BoxUI";
import PriceRange from "./Filters/PriceRange";
import BusClass from "./Filters/BusClass";
import Schedule from "./Filters/Schedule";
export default function Sidebar() {
  const classes = useTypography({ fontSize: "16px" });

  return (
    <BoxUI padding={16}>
      {/* filter start */}
      <Grid sx={{ pb: 2 }} container alignItems="center">
        <Grid item xs>
          <Typography className={classes.titleSm} variant="body1" component="p">
            Short & Filter
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="text" color="primary">
            Reset
          </Button>
        </Grid>
      </Grid>
      <Divider light sx={{ mx: -2, mt: 1 }} />
      {/* Price Range */}
      <PriceRange />

      <Divider light sx={{ mx: -2 }} />
      <BusClass />
      <Divider light sx={{ mx: -2 }} />
      <Schedule />
    </BoxUI>
  );
}
