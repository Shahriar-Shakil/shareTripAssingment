import React from "react";
import { styled } from "@mui/material";

const BoxWrapper = styled("div")(({ theme, padding, light }) => {
  return {
    padding: `${padding ? padding + "px" : "0px"}`,
    boxShadow: `${
      light
        ? "0px 2px 4px rgba(0, 0, 0, 0.12)"
        : "0px 4px 4px rgba(0, 0, 0, 0.15)"
    }`,
    borderRadius: "6px",
    border: "1px solid #F6F6F6",
  };
});
export default function BoxUI(props) {
  return <BoxWrapper {...props}>{props.children}</BoxWrapper>;
}
