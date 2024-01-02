import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <Container fluid className="px-0 main-container">
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default App;
