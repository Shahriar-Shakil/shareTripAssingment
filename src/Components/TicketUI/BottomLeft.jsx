import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Stack,
  styled,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";

import Link from "next/link";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButton-root": {
    flex: 1,
  },
  ".Mui-selected": {
    backgroundColor: "#3884F7 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "rgb(21, 101, 192) !important",
    },
  },
}));
const StyledSeatInfo = styled(Box)(({ theme }) => ({
  ".seatInfo": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  ".seatIcon": {
    transform: "rotate(-90deg)",
  },
  ".seatNumber": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    marginRight: "16px",
  },
  ".keys": {
    fontSize: "14px",
    fontWeight: "500",
    color: "#4C4C4C",
    lineHeight: "18px",
  },
  ".values": {
    fontSize: "14px",
    fontWeight: "500",
    color: "#000",
    lineHeight: "18px",
  },
  ".checkbox": {
    fontSize: "12px",
    fontWeight: "400",
    color: "#4C4C4C",
    lineHeight: "18px",
  },
  ".footer": {
    margin: "32px -16px 0",
    padding: "12px",
    backgroundColor: `${theme.palette.primary.gray100}`,
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.main,
      "& .MuiFormControlLabel-root": {
        marginRight: "0px",
      },
    },
  },
}));

export default function BottomLeft() {
  const [toggle, setToggle] = React.useState("1");
  const handleToggle = (event, value) => {
    setToggle(value);
  };
  return (
    <Box sx={{ px: 2 }}>
      <Stack spacing={2}>
        <StyledToggleButtonGroup
          value={toggle}
          exclusive
          onChange={handleToggle}
          sx={{ width: "100%" }}
          size="small"
          color="primary"
        >
          <ToggleButton value="1">Seat Info</ToggleButton>
          <ToggleButton value="2">Policy</ToggleButton>
        </StyledToggleButtonGroup>
        <StyledSeatInfo>
          <Stack spacing={1}>
            <Stack spacing={1}>
              <Box className="seatInfo">
                <Box className="seatNumber">
                  <img
                    className="seatIcon"
                    src="/icons/seats/SeatSelected.png"
                  />
                  <Typography sx={{ px: 1 }} className="keys" component="span">
                    B4
                  </Typography>
                  <Typography className="keys" component="span">
                    B-class
                  </Typography>
                </Box>
                <Typography className="values">BDT 750</Typography>
              </Box>
              <Box className="seatInfo">
                <Box className="seatNumber">
                  <img
                    className="seatIcon"
                    src="/icons/seats/SeatSelected.png"
                  />
                  <Typography sx={{ px: 1 }} className="keys" component="span">
                    B4
                  </Typography>
                  <Typography className="keys" component="span">
                    B-class
                  </Typography>
                </Box>
                <Typography className="values">BDT 750</Typography>
              </Box>
              <Divider light sx={{ pt: 1 }} />
            </Stack>
            <Stack spacing={1}>
              <Box>
                <Typography sx={{ float: "left" }} className="keys">
                  Charge :
                </Typography>
                <Typography sx={{ float: "right" }} className="values">
                  BDT 50
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ float: "left" }} className="keys">
                  Insurance :
                </Typography>
                <Typography sx={{ float: "right" }} className="values">
                  BDT 20
                </Typography>
              </Box>

              <Divider light sx={{ pt: 1 }} />
            </Stack>
            <Stack spacing={1}>
              <Box>
                <Typography sx={{ float: "left" }} className="keys">
                  Sub Total :
                </Typography>
                <Typography sx={{ float: "right" }} className="values">
                  BDT 1,570
                </Typography>
              </Box>
            </Stack>
          </Stack>
          <Box className="footer">
            <FormControl component="fieldset" variant="standard">
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label={
                  <Typography className="checkbox">
                    I want to avail{" "}
                    <Link href="/">
                      <a>Insurance Service</a>
                    </Link>
                  </Typography>
                }
              />
            </FormControl>
            <Button fullWidth variant="contained" color="primary">
              Select & Continue
            </Button>
          </Box>
        </StyledSeatInfo>
      </Stack>
    </Box>
  );
}
