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
    fontWeight600: {
      fontWeight: 600,
    },
  };
});
export const useTicketStyles = makeStyles((theme) => {
  return {
    title: {
      background: "#BBDDFF",
      "border-radius": "16px",
      padding: "4px 16px",
      fontSize: "18px",
      fontWeight: 600,
    },
    label: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
    },
    location: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    time: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
    },
    counter: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
    },
    date: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
    },
    busIcon: {
      position: "relative",
      "&:before": {
        content: 'url("/icons/arrowLeftPart.png")',
        position: "absolute",
        top: "-4px",
        left: " 8px",
      },
      "&:after": {
        content: 'url("/icons/arrowRightPart.png")',
        position: "absolute",
        top: "0px",
        left: "133px",
      },
    },
  };
});
