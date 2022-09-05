import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useTicketStyles, useTypography } from "../../stylesHook/stylesHook";
export default function TicketBody() {
  const classes = useTypography({ fontSize: "16px" });
  const ticketStyles = useTicketStyles();
  return (
    <Stack spacing={2}>
      {/* heading start */}
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
  );
}
