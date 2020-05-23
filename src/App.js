import React from "react";
import "./App.css";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
