import React from "react";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f0f2f5] flex items-center justify-center ">
      <div className="w-[70%] h-[70%] flex ">
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-5xl font-bold text-purple-500">ScoialBook</h3>
          <span className="text-2xl">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className="h-[300px] p-[20px] bg-white rounded-md flex flex-col justify-between">
            <input
              placeholder="Email"
              className="h-[50px] rounded-md border-[1px] border-solid border-gray-100 text-lg pl-[20px]"
            />
            <input
              placeholder="Password"
              className="h-[50px] rounded-md border-[1px] border-solid border-gray-100 text-lg pl-[20px]"
            />
            <button className="p-[10px] rounded-md border-none bg-purple-500 text-white text-lg font-medium cursor-pointer ">
              Log In
            </button>
            <span className="text-center text-[#1775ee]">Forgot Password?</span>
            <button className="p-[10px] rounded-md border-none bg-[#42b72a] text-white text-lg font-medium cursor-pointer ">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
