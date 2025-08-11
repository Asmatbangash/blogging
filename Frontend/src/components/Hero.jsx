import React from "react";
import { Button, Input } from "./Comp_index";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="flex justify-center items-center mt-12">
      <div className="text-center">
        <div className="max-w-md">
          <Button
            text="New AI feture integrated"
            className="py-2 px-4 mb-5 rounded-full bg-[#3c7b703b]"
          />
          <h1 className="text-5xl max-sm:text-3xl font-bold opacity-80">
            Your own <span className="text-primary opacity-80">blogging</span>{" "}
            <br /> plateform
          </h1>

          <p className="py-4">
            Share your voice with the world using our intelligent,
            creator-friendly blogging platform. Empower your stories with
            AI-driven tools designed to inspire and engage.
          </p>
          <form className="flex justify-between w-full border-1 border-gray-300 rounded-md">
            <Input
              type="text"
              placeholder="Search for a blog"
              className="w-full px-2 outline-0"
              required={true}
            />
            <Button
              className="w-[20%] btn btn-primary text-white px-4 py-2"
              text="Search"
            />
          </form>
          <div className="flex flex-wrap justify-center items-center space-x-4 my-6">
            {assets.routes.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                aria-current={item.current ? "page" : undefined}
                className=" px-2 py-1"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
