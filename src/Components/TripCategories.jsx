import React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import BoltIcon from "@mui/icons-material/Bolt";
import SavingsIcon from "@mui/icons-material/Savings";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  styled,
} from "@mui/material";
import { useTypography } from "../stylesHook/stylesHook";
import BoxUI from "./UI/BoxUI";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    // margin: theme.spacing(0),
    border: 0,
  },
  "& .MuiToggleButton-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flex: 1,
    fontSize: "14px",
    fontWeight: "500",
    lineHight: "20.02px",
    color: "#000",
    textTransform: "none",
    margin: 0,
    padding: "10px 16px",
    "& svg": {
      float: "left",
      fontSize: "30px",
      marginRight: "7px",
    },
  },
  ".Mui-selected": {
    backgroundColor: "#3884F7 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "rgb(21, 101, 192) !important",
    },
  },
  ".iconImage": {
    marginRight: "8px",
  },
}));
export default function TripCategories() {
  const classes = useTypography({ fontSize: "16px" });

  const [toggle, setToggle] = React.useState("2");
  const handleToggle = (event, value) => {
    setToggle(value);
  };
  return (
    <Box>
      <Typography className={classes.titleLg} variant="body1" color="initial">
        48 Available Buses
      </Typography>
      <BoxUI light={true} sx={{ mt: 2 }}>
        <StyledToggleButtonGroup
          value={toggle}
          exclusive
          onChange={handleToggle}
          sx={{ width: "100%" }}
          size="large"
          color="primary"
        >
          <ToggleButton value="1">
            <img className="iconImage" src={"/icons/diamond.png"} />
            Earliest Buses
          </ToggleButton>
          <ToggleButton value="2">
            <SavingsIcon />
            Cheapest Buses
          </ToggleButton>
          <ToggleButton value="3">
            <BoltIcon />
            Available Seats
          </ToggleButton>
          <ToggleButton value="4">
            <BoltIcon />
            Fastest Trips
          </ToggleButton>
        </StyledToggleButtonGroup>
      </BoxUI>
    </Box>
  );
}
