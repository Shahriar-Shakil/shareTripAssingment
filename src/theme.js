import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1882FF",
      light: "rgba(56, 132, 247, 0.16)",
      black: "#000000",
      darkYellow: "#ff9800",
      gray100: "#FAFAFA",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["SF Pro Display", "sans-serif"].join(","),
    fontSize: "14px",
  },
});

export default theme;
