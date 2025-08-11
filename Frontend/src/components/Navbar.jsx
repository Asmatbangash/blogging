import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar px-30 max-sm:px-6 flex justify-between">
      <Link to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt=""
          className="w-10 rounded-[50%] aspect-video h-10"
        />
      </Link>

      <div className="flex-none">
        <Button text="Login" className="btn btn-primary text-white" />
      </div>
    </div>
  );
}

export default Navbar;
