import { Container } from "@mui/material";
import React from "react";
import Feature from "./components/Feature";
import Header from "./components/Header";
import RegisterBanner from "./components/RegisterBanner";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Container>
        <Header />
        <RegisterBanner />
        <Feature />
        <Testimonials />
      </Container>
    </div>
  );
};

export default App;
