import {
  Box,
  Checkbox,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTypography } from "../../stylesHook/stylesHook";

let schedules = ["00:00-05:59", "06:00-11:59", "12:00-17:59", "18:00-23:59"];
export default function Schedule() {
  const classes = useTypography({ fontSize: "16px" });
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Box sx={{ py: 2 }}>
      <p className={classes.titleLg}>Schedule</p>
      <Divider light sx={{ mt: 1 }} />
      <Box sx={{ mt: 3 }}>
        <p className={classes.titleXs}>Departure Time</p>
        <List divider sx={{ width: "100%", maxWidth: 360 }}>
          {schedules.map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <ListItem
                sx={{
                  border: "1px solid #F3F3F6",
                  borderRadius: "3px",
                  marginY: "6px",
                }}
                key={value}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(value)}
                  dense
                >
                  <ListItemIcon sx={{ minWidth: 0 }}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    id={labelId}
                    primary={<p className={classes.titleLg}>{value}</p>}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
}
