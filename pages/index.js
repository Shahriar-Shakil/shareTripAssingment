import * as React from "react";

import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import BoxUI from "../src/Components/UI/BoxUI";
import Layout from "../src/layout/Layout";
import Sidebar from "../src/Components/Sidebar";

export default function Index() {
  return (
    <Layout>
      <Container style={{ paddingTop: "14px" }} maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item lg={3}>
            <Sidebar />
          </Grid>
          <Grid item lg={9}>
            <BoxUI padding={16}>sdsdsd</BoxUI>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
