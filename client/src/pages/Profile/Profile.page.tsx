import React from "react";
import Feed from "../../components/Feed/Feed.component";
import RightBar from "../../components/rightBar/RightBar.component";
import SideBar from "../../components/sideBar/SideBar.component";
import TopBar from "../../components/topBar/TopBar.component";

type Props = {};

export default function Profile({}: Props) {
  return (
    <>
      <TopBar />
      <div className="flex mt-[6%]">
        <SideBar />
        <div className="flex-[9]">
          <div className="profileRightTop">
            <div className="h-[320px] relative">
              <img
                className="w-full h-[250px] object-cover"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="w-[150px] h-[150px] rounded-md object-cover absolute left-0 right-0 m-[auto] top-[150px] border-[3px] border-white "
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-2xl">Safak Kocaoglu</h4>
              <span className="font-medium">Hello my friends!</span>
            </div>
          </div>
          <div className="flex">
            <Feed />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}
