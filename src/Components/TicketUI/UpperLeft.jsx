import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  styled,
  Stack,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
export const useStyles = makeStyles((theme) => {
  return {
    wrapper: {
      textAlign: "right",
      display: "flex",
      flexFlow: "column wrap",
      alignContent: "flex-end",
    },
    label: {
      fontSize: "10px",
      fontWeight: "600",
      lineHeight: "12px",
    },
    priceBig: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "32px",
      color: "#235FD8",
    },
    priceSmall: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
      color: "#1882FF",
    },
    cancelPolicy: {
      textDecoration: "none",
      color: `${theme.palette.primary.main}`,
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "16px",
    },
  };
});
export default function UpperLeft() {
  const upperLeftClass = useStyles();

  return (
    <Box sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Box className={upperLeftClass.wrapper}>
          <Typography className={upperLeftClass.label} component="p">
            Per Person
          </Typography>
          <Typography className={upperLeftClass.priceBig} component="p">
            BDT 750
          </Typography>
          <Typography className={upperLeftClass.priceSmall} component="p">
            BDT 750
          </Typography>
        </Box>
        <Box className={upperLeftClass.wrapper}>
          <Button sx={{ mb: "12px" }} variant="contained" color="primary">
            View Seats
          </Button>
          <Link href="/about">
            <a className={upperLeftClass.cancelPolicy}>Cancellation Policy</a>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
