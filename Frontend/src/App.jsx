import React from "react";
import { Hero, Navbar } from "./components/Comp_index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  );
}

export default App;
