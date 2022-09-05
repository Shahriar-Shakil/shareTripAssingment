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
import BoxUI from "../UI/BoxUI";
import { useTypography } from "../../stylesHook/stylesHook";
import TicketBody from "./TicketBody";
import SeatsStatus from "./SeatsStatus";
import Link from "next/link";
import UpperLeft from "./UpperLeft";

export default function TicketsUI() {
  return (
    <BoxUI light={true}>
      <Stack spacing={2}>
        <Grid container>
          <Grid item lg={9}>
            <Box sx={{ px: 3, py: 2 }}>
              <TicketBody />
            </Box>
          </Grid>
          <Grid
            sx={(theme) => ({ background: `${theme.palette.primary.light}` })}
            item
            lg={3}
          >
            <UpperLeft />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={9}>
            <Box sx={{ px: 3 }}>
              <Box sx={{}}>
                <Grid container columnSpacing={2}>
                  <Grid item lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="label-boarding">
                        Boarding Point
                      </InputLabel>
                      <Select
                        labelId="label-boarding"
                        id="demo-simple-select"
                        value={10}
                        label="Boarding Point"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Uttara</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item lg={6}>
                    <FormControl fullWidth>
                      <InputLabel id="label-dropping">
                        Dropping Point
                      </InputLabel>
                      <Select
                        labelId="label-dropping"
                        id="demo-simple-select"
                        value={10}
                        label="Dropping Point"
                        // onChange={handleChange}
                      >
                        <MenuItem value={10}>Kamarpara Counter</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <SeatsStatus />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Box></Box>
          </Grid>
        </Grid>
      </Stack>
    </BoxUI>
  );
}
