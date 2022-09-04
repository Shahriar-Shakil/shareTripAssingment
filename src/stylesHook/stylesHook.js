import { makeStyles } from "@mui/styles";

export const useTypography = makeStyles((theme) => {
  return {
    titleSm: {
      fontSize: "14px",
      fontWeight: "500",
      lineHight: "20.02px",
    },
    titleLg: {
      fontSize: (props) => (props.fontSize ? props.fontSize : "14px"),
      fontWeight: "500",
      lineHight: "20.02px",
    },
    titleXs: {
      fontSize: "12px",
      fontWeight: "400",
      lineHight: "18px",
    },
    fontWeight700: {
      fontWeight: 700,
    },
  };
});
