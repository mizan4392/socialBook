import { Avatar, Badge, Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
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
import { UserContext } from "../../context/UserContext";
import { CORE_API_URL, CORE_STORAGE_URL } from "../../utils/environment";
const { Search } = Input;
type Props = {};
export const dummyUser =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";
export const img =
  "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600";

export const dummyCover =
  "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png";

export default function TopBar({}: Props) {
  const [theme, setTheme] = useState("light");
  const { user } = useContext(UserContext);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme);
    }
  }, []);

  useEffect(() => {
    const body = document.getElementsByTagName("body");
    if (theme === "dark") {
      body[0].style.background = "rgb(31 41 55 / 1";
      document.documentElement.classList.add("dark");
    } else {
      body[0].style.background = "#fff";
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggle = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div
      className="flex items-center justify-between px-[20px] py-[10px] border-[1px] bg-whit sticky top-0 bg-white dark:bg-gray-800 dark:text-white"
      style={{ borderBottom: "1px solid gray" }}
    >
      <div className="flex items-center gap-[30px]">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="font-bold text-[20px] text-purple-600 dark:text-white ">
            SocialBook
          </span>
        </Link>
        <TiHomeOutline className="nav-icon" />

        {theme === "dark" ? (
          <MdOutlineWbSunny className="nav-icon" onClick={toggle} />
        ) : (
          <MdOutlineDarkMode className="nav-icon" onClick={toggle} />
        )}
        <MdOutlineGridView className="nav-icon" />
        <div className="items-center gap-[10px] rounded-[5px] p-[5px] hidden md:flex">
          <MdSearch className="nav-icon" />
          <input
            className="border-none w-[200px] lg:w-[500px]"
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="block md:hidden">
        <MdSearch className="nav-icon" />
      </div>

      <div className="items-center gap-[20px] hidden md:flex">
        <MdPersonPin className="nav-icon" />
        <AiOutlineMail className="nav-icon" />
        <IoIosNotifications className="nav-icon" />
        <div className="items-center gap-[10px] font-bold hidden lg:flex  ">
          <img
            className="profile-avatar"
            src={
              user?.profilePic
                ? `${CORE_STORAGE_URL}/${user?.profilePic}`
                : dummyUser
            }
            alt=""
          />
          <span>{user?.userName}</span>
        </div>
      </div>
    </div>
  );
}
