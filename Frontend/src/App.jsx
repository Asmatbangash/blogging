import React from "react";
import { Footer, Navbar } from "./components/Comp_index";
import { Outlet } from "react-router-dom";
import "react-quill-new/dist/quill.snow.css";

function App() {
  return (
    <>
      <Navbar
        className="navbar px-30 max-sm:px-6 flex justify-between"
        href={"/"}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
