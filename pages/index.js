import * as React from "react";

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
import Grid from "@mui/material/Grid";
import BoxUI from "../src/Components/UI/BoxUI";
import Layout from "../src/layout/Layout";
import Sidebar from "../src/Components/Sidebar";
import { useTypography } from "../src/stylesHook/stylesHook";
import DiamondIcon from "@mui/icons-material/Diamond";
import BoltIcon from "@mui/icons-material/Bolt";
import SavingsIcon from "@mui/icons-material/Savings";

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
      marginRight: "8px",
    },
  },
  ".Mui-selected": {
    backgroundColor: "#3884F7 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "rgb(21, 101, 192) !important",
    },
  },
}));

export default function Index() {
  const classes = useTypography({ fontSize: "16px" });
  const [toggle, setToggle] = React.useState("2");
  const handleToggle = (event, value) => {
    setToggle(value);
  };
  return (
    <Layout>
      <Container style={{ paddingTop: "14px" }} maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={9}>
            <Box>
              <Typography
                className={classes.titleLg}
                variant="body1"
                color="initial"
              >
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
                    <DiamondIcon />
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
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
