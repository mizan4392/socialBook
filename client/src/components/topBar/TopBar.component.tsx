import { Avatar, Badge, Input } from "antd";
import React, { useState } from "react";

import {
  AiOutlineClose,
  AiFillNotification,
  AiOutlineMenu,
  AiOutlineUser,
  AiFillMessage,
} from "react-icons/ai";
const { Search } = Input;
type Props = {};

export default function TopBar({}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  let navItems = [
    {
      name: (
        <Badge count={5}>
          <AiOutlineUser
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </Badge>
      ),
      link: "/",
    },
    {
      name: (
        <Badge count={3}>
          <AiFillMessage
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </Badge>
      ),
      link: "/service",
    },
    {
      name: (
        <Badge count={2}>
          <AiFillNotification
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </Badge>
      ),
      link: "/about",
    },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className=" text-white font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-white">SocialBook</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className="flex items-center mt-3 md:mt-0 w-50 md:w-96 ">
          <Search placeholder="search" />
        </div>
        <div className="md:flex items-center justify-between">
          <ul
            className={`text-center flex justify-around absolute md:static
         bg-white md:z-auto z-[-1] left-0 w-full md:w-auto 
         md:pl-0 pl-2 transition-all duration-500 ease-in ${
           open ? "top-18" : "top-[-490px]"
         } `}
          >
            {navItems?.map((itm, i) => {
              return (
                <li
                  key={i}
                  className=" md:ml-8 text-xl md:my-0 my-7 text-white"
                >
                  <a
                    href={itm.link}
                    className="text-white hover:text-gray-400 duration-500"
                  >
                    {itm.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
