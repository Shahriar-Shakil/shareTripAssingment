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
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import BoxUI from "../src/Components/UI/BoxUI";
import Layout from "../src/layout/Layout";
import Sidebar from "../src/Components/Sidebar";
import { useTypography } from "../src/stylesHook/stylesHook";
import TripCategories from "../src/Components/TripCategories";
import CurrencyLiraIcon from "@mui/icons-material/CurrencyLira";
import { makeStyles } from "@mui/styles";
import TicketsUI from "../src/Components/TicketsUI";

export default function Index() {
  return (
    <Layout>
      <Container style={{ paddingTop: "14px" }} maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={9}>
            <Stack spacing={2}>
              <TripCategories />
              <TicketsUI />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
