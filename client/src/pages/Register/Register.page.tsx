import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
type Props = {};

export default function Register({}: Props) {
  return (
    <div className="h-[100vh] bg-[#C7D1F7] flex items-center justify-center ">
      <div className="flex text-white bg-white w-[50%] rounded-lg min-h-[600px] gap-[30px] overflow-hidden flex-row-reverse	">
        <div className="left flex-1 flex flex-col p-[50px]  ">
          <h1 className="text-[100px] leading-[100px] text-white">
            Hello World.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="text-[14px]">Don't you have an account?</span>
          <Link to={"/login"}>
            <button className="w-[50%] p-[10px] border-none bg-white text-purple-600 ">
              Login
            </button>
          </Link>
        </div>
        <div className="flex-1 p-[50px] flex flex-col gap-[50px] justify-center ">
          <h1 className="text-[#555]">Register</h1>
          <form className="flex flex-col gap-[30px]">
            <input
              type="text"
              placeholder="Username"
              className="border-none "
              style={{
                borderBottom: "1px solid lightgray",
                padding: "20px 10px",
              }}
            />
            <input
              type="email"
              placeholder="Email:"
              className="border-none "
              style={{
                borderBottom: "1px solid lightgray",
                padding: "20px 10px",
              }}
            />
            <input
              type="text"
              placeholder="Name..."
              className="border-none "
              style={{
                borderBottom: "1px solid lightgray",
                padding: "20px 10px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-none "
              style={{
                borderBottom: "1px solid lightgray",
                padding: "20px 10px",
              }}
            />
            <button className="w-[50%] p-[10px] border-none bg-[#038eef] text-[#fff] font-bold cursor-pointer ">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
