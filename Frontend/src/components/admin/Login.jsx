import React from "react";
import Input from "../Input";
import Button from "../Button";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          <span className="text-primary">Admin</span> Login
        </h2>
        <p className="text-center pb-10">
          inter your detail to access admin panel
        </p>
        <form className="flex flex-col" onSubmit={""}>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email address"
            required={true}
          />
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Password"
            required={true}
          />

          <Button
            type="submit"
            text={"login"}
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
