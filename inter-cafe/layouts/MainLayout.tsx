import React from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";


export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Container style = {{margin: '90px 0'}}>
          {children}
      </Container>
     
    </>
  );
}
