import React, { useContext } from "react";
import {
  BsCalendarEventFill,
  BsFillBookmarkHeartFill,
  BsFillCameraVideoFill,
  BsFillChatFill,
  BsFillRssFill,
} from "react-icons/bs";
import { TiGroup } from "react-icons/ti";
import { IoIosHelpCircle } from "react-icons/io";
import { MdSchool, MdWork } from "react-icons/md";
type Props = {};
import { Users } from "../../data";
import CloseFriend from "../CloseFriend/CloseFriend";
import { dummyUser, img } from "../topBar/TopBar.component";
import Friends from "../../../assets/1.png";
import Groups from "../../../assets/2.png";
import Market from "../../../assets/3.png";
import Watch from "../../../assets/4.png";
import Memories from "../../../assets/5.png";
import Events from "../../../assets/6.png";
import Gaming from "../../../assets/7.png";
import Gallery from "../../../assets/8.png";
import Videos from "../../../assets/9.png";
import Messages from "../../../assets/10.png";
import Tutorials from "../../../assets/11.png";
import Courses from "../../../assets/12.png";
import Fund from "../../../assets/13.png";
import "./LeftBar.css";
import { UserContext } from "../../context/UserContext";
export default function LeftBar({}: Props) {
  const { user } = useContext(UserContext);
  const itmes = [
    {
      img: Friends,
      label: "Friends",
    },
    {
      img: Groups,
      label: "Groups",
    },
    {
      img: Market,
      label: "Marketplace",
    },
    {
      img: Watch,
      label: "Watch",
    },
    {
      img: Memories,
      label: "Memories",
    },
    {
      img: Events,
      label: "Events",
    },
    {
      img: Gaming,
      label: "Gaming",
    },
    {
      img: Gallery,
      label: "Gallery",
    },
    {
      img: Videos,
      label: "Videos",
    },
    {
      img: Messages,
      label: "Messages",
    },
    {
      img: Fund,
      label: "Fundraiser",
    },
    {
      img: Tutorials,
      label: "Tutorials",
    },
    {
      img: Courses,
      label: "Courses",
    },
  ];

  return (
    <div
      style={{ flex: 2 }}
      className="no-scrollbar sticky top-[70px] h-[calc(100vh-70px)] overflow-scroll dark:text-white dark:bg-gray-800 hidden md:block "
    >
      <div className="p-[20px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex gap-[10px]">
            <img
              src={user?.profilePic ? user?.profilePic : dummyUser}
              alt=""
              className="profile-avatar"
            />
            <span>{user?.userName}</span>
          </div>
          {itmes.slice(0, 5).map((itm, i) => {
            return (
              <div className="flex items-center gap-[20px]" key={i}>
                <img src={itm.img} alt="" width="30px" height="30px" />
                <span className="text-[14px]">{itm.label}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex flex-col gap-[20px]">
          <span className="text-[12px]">Your shortcuts</span>
          {itmes.slice(6, 10).map((itm, i) => {
            return (
              <div className="flex items-center gap-[20px]" key={i}>
                <img src={itm.img} alt="" width="30px" height="30px" />
                <span className="text-[14px]">{itm.label}</span>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="flex flex-col gap-[20px]">
          <span className="text-[12px]">Others</span>
          {itmes.slice(10, 13).map((itm, i) => {
            return (
              <div className="flex items-center gap-[20px]" key={i}>
                <img src={itm.img} alt="" width="30px" height="30px" />
                <span className="text-[14px]">{itm.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
