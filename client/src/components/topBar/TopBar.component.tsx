import { Avatar, Badge, Input } from "antd";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import {
  MdOutlineDarkMode,
  MdOutlineGridView,
  MdOutlineWbSunny,
  MdPersonPin,
  MdSearch,
} from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";

import { Link } from "react-router-dom";
const { Search } = Input;
type Props = {};

export const img =
  "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600";

export default function TopBar({}: Props) {
  return (
    <div
      className="flex items-center justify-between px-[20px] py-[10px] border-[1px] bg-whit sticky top-0 bg-white "
      style={{ borderBottom: "1px solid gray" }}
    >
      <div className="flex items-center gap-[30px]">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="font-bold text-[20px] text-purple-600 ">
            SocialBook
          </span>
        </Link>
        <TiHomeOutline className="nav-icon" />
        <MdOutlineDarkMode className="nav-icon" />
        {/* {darkMode ? (
          <MdOutlineWbSunny onClick={toggle} />
        ) : (
          <MdOutlineDarkMode onClick={toggle} />
        )} */}
        <MdOutlineGridView className="nav-icon" />
        <div className="flex items-center gap-[10px] rounded-[5px] p-[5px] ">
          <MdSearch className="nav-icon" />
          <input
            className="border-none w-[500px]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <MdPersonPin className="nav-icon" />
        <AiOutlineMail className="nav-icon" />
        <IoIosNotifications className="nav-icon" />
        <div className="flex items-center gap-[10px] font-bold  ">
          <img className="profile-avatar" src={img} alt="" />
          <span>{"Mizan"}</span>
        </div>
      </div>
    </div>
  );
}

// const [open, setOpen] = useState<boolean>(false);
// let navItems = [
//   {
//     name: (
//       <Badge count={5}>
//         <AiOutlineUser
//           style={{
//             width: "25px",
//             height: "25px",
//           }}
//           className="text-purple-600"
//         />
//       </Badge>
//     ),
//     link: "/",
//   },
//   {
//     name: (
//       <Badge count={3}>
//         <AiFillMessage
//           style={{
//             width: "25px",
//             height: "25px",
//           }}
//           className="text-purple-600"
//         />
//       </Badge>
//     ),
//     link: "/service",
//   },
//   {
//     name: (
//       <Badge count={2}>
//         <AiFillNotification
//           style={{
//             width: "25px",
//             height: "25px",
//           }}
//           className="text-purple-600"
//         />
//       </Badge>
//     ),
//     link: "/about",
//   },
// ];

// return (
//   <div className="shadow-md w-full fixed top-0 left-0 ">
//     <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//       <div className=" text-white font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
//         <span className="text-purple-600">SocialBook</span>
//       </div>
//       <div
//         onClick={() => setOpen(!open)}
//         className="text-purple-600 text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
//       >
//         {open ? <AiOutlineClose /> : <AiOutlineMenu />}
//       </div>
//       <div className="flex items-center mt-3 md:mt-0 w-50 md:w-96 ">
//         <Search placeholder="search" />
//       </div>
//       <div className="md:flex items-center justify-between">
//         <ul
//           className={`text-center flex justify-around absolute md:static
//        bg-white md:z-auto z-[-1] left-0 w-full md:w-auto
//        md:pl-0 pl-2 transition-all duration-500 ease-in ${
//          open ? "top-18" : "top-[-490px]"
//        } `}
//         >
//           {navItems?.map((itm, i) => {
//             return (
//               <li
//                 key={i}
//                 className=" md:ml-8 text-xl md:my-0 my-7 text-white"
//               >
//                 <a
//                   href={itm.link}
//                   className="text-white hover:text-gray-400 duration-500"
//                 >
//                   {itm.name}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   </div>
// );
