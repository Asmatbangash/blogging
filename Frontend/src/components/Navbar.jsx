import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar({ className = "" }) {
  return (
    <div className={`${className}`}>
      <Link to="/" className="flex items-center">
        <img
          src={assets.logo}
          alt=""
          className="w-10 rounded-[50%] aspect-video h-10"
        />
      </Link>

      <div className="flex-none">
        <Link to="/login">
          {" "}
          <Button text="Login" className="btn btn-info text-white" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
