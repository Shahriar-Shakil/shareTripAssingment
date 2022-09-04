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
          </Box>
        </Grid>
        <Grid sx={{ background: "blue" }} item lg={3}>
          aside
        </Grid>
      </Grid>
    </BoxUI>
  );
}
