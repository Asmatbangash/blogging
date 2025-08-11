import React from "react";
import Input from "./Input";
import Button from "./Button";

function Subscribe() {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <div className="my-4 text-center">
        <h1 className=" text-3xl font-bold">Never miss a blog!</h1>
        <p>Subscribe to get a latest blog,new tech and exclusive news.</p>
      </div>
      <form className="flex justify-between w-90 border-1 border-gray-300 rounded-md">
        <Input
          type="text"
          placeholder="subscriber email"
          className="w-full px-2 outline-0"
          required={true}
        />
        <Button
          className="w-[20%] btn btn-primary text-white px-4 py-2"
          text="Subscribe"
        />
      </form>
    </div>
  );
}

export default Subscribe;
