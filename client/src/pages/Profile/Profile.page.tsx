import React from "react";
import {
  AiFillInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoLogoPinterest } from "react-icons/io";
import {
  MdEmail,
  MdFacebook,
  MdLanguage,
  MdLocationPin,
  MdMoreVert,
} from "react-icons/md";

import Feed from "../../components/Feed/Feed.component";
import PostWrapper from "../../components/post/PostWrapper.component";
import RightBar from "../../components/rightBar/RightBar.component";
import SideBar from "../../components/sideBar/LeftBar.component";
import TopBar from "../../components/topBar/TopBar.component";

type Props = {};

export default function Profile({}: Props) {
  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <img
          src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          className="w-[200px] h-[200px] object-cover absolute left-0 right-0 m-auto top-[200px]"
          style={{
            borderRadius: "50%",
          }}
        />
      </div>
      <div style={{ padding: "20px 70px" }}>
        <div
          className="shadow h-[180px] p-[50px] flex items-center justify-between mb-[20px] "
          style={{ borderRadius: "20px" }}
        >
          <div className="flex gap-[10px]" style={{ flex: 1 }}>
            <a href="http://facebook.com">
              <MdFacebook fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <AiFillInstagram fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <AiOutlineTwitter fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <AiOutlineLinkedin fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <IoLogoPinterest fontSize="large" />
            </a>
          </div>
          <div
            className=" flex flex-col items-center gap-[10px]"
            style={{ flex: 1 }}
          >
            <span className="text-[30px] font-medium">Jane Doe</span>
            <div className=" w-full flex items-center justify-around">
              <div className=" flex items-center gap-[5px]">
                <MdLocationPin />
                <span className="text-[12px]">USA</span>
              </div>
              <div className="flex items-center gap-[5px]">
                <MdLanguage />
                <span className="text-[12px]">lama.dev</span>
              </div>
            </div>
            <button
              className="border-none bg-[#5271ff] text-white cursor-pointer"
              style={{ borderRadius: "5px", padding: "10px 20px" }}
            >
              Follow
            </button>
          </div>
          <div
            className="flex items-center justify-end gap-[10px]"
            style={{ flex: 1 }}
          >
            <MdEmail />
            <MdMoreVert />
          </div>
        </div>
        <PostWrapper />
      </div>
    </div>
  );
}
