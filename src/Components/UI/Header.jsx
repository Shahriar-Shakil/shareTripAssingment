import { List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import React from "react";

import { styled } from "@mui/system";

const HeaderComponent = styled(Box)(({ theme }) => ({
  padding: "14px 0px",
}));
const Navbar = styled(List)(({ theme }) => ({
  display: "flex",
  padding: "0px",

  "& li ": {
    width: "auto",
    padding: "8px",
    cursor: "pointer",
    "&:hover > a": {
      color: theme.palette.primary.main,
    },
    "& a": {
      color: theme.palette.primary.black,

      textDecoration: "none",
      fontSize: "14px",
      lineHeight: "143%",
      fontWeight: "400",
      fontStyle: "normal",
    },
  },
}));

export default function Header() {
  return (
    <HeaderComponent sx={{ bgcolor: "primary.light" }}>
      <Container maxWidth="lg" sx={{ display: "flex" }}>
        <img src="/logo.png" alt="" />
        <Navbar>
          <ListItem>
            <Link href="">
              <a>Flight</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Bus</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Hotel</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Holiday</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Visa</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Visa Guide</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Group Request</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Group Request</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Travel Advisory</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Promotions</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="">
              <a>Blog</a>
            </Link>
          </ListItem>
        </Navbar>
      </Container>
    </HeaderComponent>
  );
}
