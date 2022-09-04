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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { makeStyles } from "@mui/styles";
import BoxUI from "./UI/BoxUI";
import { useTypography } from "../stylesHook/stylesHook";

export const useTicketStyles = makeStyles((theme) => {
  return {
    title: {
      background: "#BBDDFF",
      "border-radius": "16px",
      padding: "4px 16px",
      fontSize: "18px",
      fontWeight: 600,
    },
    label: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
    },
    location: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    time: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    counter: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
    },
    date: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
    },
    busIcon: {
      position: "relative",
      "&:before": {
        content: 'url("/icons/arrowLeftPart.png")',
        position: "absolute",
        top: "-4px",
        left: " 8px",
      },
      "&:after": {
        content: 'url("/icons/arrowRightPart.png")',
        position: "absolute",
        top: "0px",
        left: "133px",
      },
    },
  };
});

export default function TicketsUI() {
  const classes = useTypography({ fontSize: "16px" });
  const ticketStyles = useTicketStyles();
  return (
    <BoxUI light={true}>
      <Grid container>
        <Grid item lg={9}>
          {/* heading start */}
          <Box sx={{ px: 3, py: 2 }}>
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <Typography
                  className={(classes.titleLg, classes.fontWeight600)}
                  component="p"
                >
                  AC
                </Typography>
                <Box>
                  <Typography
                    className={(classes.titleL, ticketStyles.title)}
                    component="p"
                  >
                    Hanif Enterprize
                  </Typography>
                  <Typography
                    sx={{ fontSize: "10px", textAlign: "center" }}
                    className={classes.titleXs}
                    component="p"
                  >
                    31-DHK-CTG(D)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <CurrencyLiraIcon
                    sx={(theme) => ({
                      fontSize: "26px",
                      background: theme.palette.warning.main,
                      color: theme.palette.primary.darkYellow,
                      borderRadius: "50%",
                      mr: 1,
                    })}
                    color="warning"
                  />
                  <Typography
                    sx={{ float: "right" }}
                    className={(classes.titleLg, classes.fontWeight600)}
                    component="p"
                  >
                    50
                  </Typography>
                </Box>
              </Box>
              {/* heading end */}
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography className={ticketStyles.label} component="p">
                    Form
                  </Typography>
                  <Typography className={ticketStyles.location} component="p">
                    Dhaka
                  </Typography>
                  <Typography className={ticketStyles.time} component="p">
                    11:30 PM
                  </Typography>
                  <Typography className={ticketStyles.counter} component="p">
                    Kolabagan Counter
                  </Typography>
                  <Typography className={ticketStyles.date} component="p">
                    22 June 2021
                  </Typography>
                </Box>
                <Box
                  sx={{ flex: 1, textAlign: "center" }}
                  className={ticketStyles.busIcon}
                >
                  <img src={"/icons/bus.png"} />
                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.warning.main,
                    })}
                    className={ticketStyles.counter}
                    component="p"
                  >
                    16 seat available
                  </Typography>
                  <Typography className={ticketStyles.label} component="p">
                    6h 00m
                  </Typography>
                </Box>
                <Box sx={{ flex: 1, pl: 3 }}>
                  <Typography className={ticketStyles.label} component="p">
                    To
                  </Typography>
                  <Typography className={ticketStyles.location} component="p">
                    Chottogram
                  </Typography>
                  <Typography className={ticketStyles.time} component="p">
                    05:30 AM
                  </Typography>
                  <Typography className={ticketStyles.counter} component="p">
                    Dampara Counter
                  </Typography>
                  <Typography className={ticketStyles.date} component="p">
                    23 June 2021
                  </Typography>
                </Box>
              </Box>
            </Stack>
            {/* ticket body end */}
          </Box>
        </Grid>
        <Grid sx={{ background: "blue" }} item lg={3}>
          aside
        </Grid>
      </Grid>
    </BoxUI>
  );
}
