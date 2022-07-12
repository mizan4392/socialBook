import React from "react";
import { Users } from "../../data";
import Online from "../Online/Online.component";

type Props = {};

export default function RightBar({}: Props) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="flex items-center">
          <img
            className="w-[40px] h-[40px] mr-[10px]"
            src="assets/gift.png"
            alt=""
          />
          <span className="text-md font-light	">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img
          className="w-full rounded-md mb-[30px] mt-[30px]"
          src="assets/ad.png"
          alt=""
        />
        <h4 className="mb-[20px]">Online Friends</h4>
        <ul className="p-0 m-0 list-none">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="flex-[3.5]">
      <div className="px-[20px]">
        <HomeRightBar />
      </div>
    </div>
  );
}
