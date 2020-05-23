import React from "react";
import { Container } from "reactstrap";
import "./App.css";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Header />
        <Dashboard />
        <Footer />
      </Container>
    </>
  );
}

export default App;
