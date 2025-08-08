import React from "react";
import { Footer, Hero, Navbar, Subscribe } from "./components/Comp_index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
