import React from "react";
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
export default function SideBar({}: Props) {
  return (
    <div className="flex-[3] h-[calc(100vh-50px)] ">
      <div className="p-[20px]">
        <ul className="p-0 m-0 list-none">
          <li className="flex items-center mb-[20px]">
            <BsFillRssFill className="mr-[15px]" />
            <span>Feed</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillChatFill className="mr-[15px]" />
            <span>Chats</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillCameraVideoFill className="mr-[15px]" />
            <span>Videos</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <TiGroup className="mr-[15px]" />
            <span>Groups</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsFillBookmarkHeartFill className="mr-[15px]" />
            <span>Bookmark's</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <IoIosHelpCircle className="mr-[15px]" />
            <span>Questions</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <MdWork className="mr-[15px]" />
            <span>Jobs</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <BsCalendarEventFill className="mr-[15px]" />
            <span>Events</span>
          </li>
          <li className="flex items-center mb-[20px]">
            <MdSchool className="mr-[15px]" />
            <span>Courses</span>
          </li>
        </ul>
        <button className="w-[150px] border-none p-[10px] rounded-md font-medium">
          Show More
        </button>
        <hr className="m-[20px 0]" />
        <ul className="p-0 m-0 list-none">
          {Users.map((u) => (
            <CloseFriend user={u} key={u?.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
