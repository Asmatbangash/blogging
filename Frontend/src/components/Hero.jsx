import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <Button
            text="New AI feture integrated"
            className="py-2 px-4 mb-5 rounded-full bg-[#3c7b703b]"
          />
          <h1 className="text-5xl font-bold opacity-80">
            Your own <span className="text-primary opacity-80">blogging</span>{" "}
            <br /> plateform
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
