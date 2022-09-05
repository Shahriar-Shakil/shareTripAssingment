import { Box, styled, Typography } from "@mui/material";
import React from "react";
const StyledSeatStatus = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.gray100,
  margin: `14px ${theme.spacing(-3)}`,
  ".wrapper": {
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".status": {
    display: "flex",
    alignItems: "center",
  },
  ".seatIcon": {
    fontSize: "24px",
    marginRight: "7px",
    // transform: "rotate(90deg)",
  },
  ".label": {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "18px",
  },
}));
export default function SeatsStatus() {
  return (
    <StyledSeatStatus>
      <div className="wrapper">
        <div className="status">
          <img className="seatIcon" src={"/icons/seats/SeatSoldOut.png"}></img>
          <Typography className="label" component="span">
            3 Sold Out
          </Typography>
        </div>
        <div className="status">
          <img className="seatIcon" src={"/icons/seats/SeatBooked.png"}></img>
          <Typography className="label" component="span">
            3 Booked
          </Typography>
        </div>
        <div className="status">
          <img className="seatIcon" src={"/icons/seats/SeatSelected.png"}></img>
          <Typography className="label" component="span">
            3 Selected
          </Typography>
        </div>
        <div className="status">
          <img
            className="seatIcon"
            src={"/icons/seats/SeatAvailable.png"}
          ></img>
          <Typography className="label" component="span">
            3 Available
          </Typography>
        </div>
        <div className="status">
          <img className="seatIcon" src={"/icons/seats/SeatBlocked.png"}></img>
          <Typography className="label" component="span">
            3 Blocked
          </Typography>
        </div>
      </div>
    </StyledSeatStatus>
  );
}
