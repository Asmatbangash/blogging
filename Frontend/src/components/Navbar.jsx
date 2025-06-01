import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

function Navbar() {
  return (
    <div className="navbar px-30  flex justify-between bg-base-100 shadow-sm">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <img src={assets.logo} alt="" className="rounded-full" />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Blogs</a>
      </div>
      <div className="flex-none">
        <Button text="Login" className="btn btn-primary text-white" />
      </div>
    </div>
  );
}

export default Navbar;
