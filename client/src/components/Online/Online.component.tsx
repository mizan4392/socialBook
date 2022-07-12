import React from "react";
import { UserI } from "../../data";

type Props = {
  user: UserI;
};

export default function Online({ user }: Props) {
  return (
    <li className="flex items-center mb-[15px]">
      <div className="mr-[10px] relative ">
        <img
          className="w-[40px] h-[40px] rounded-md object-cover "
          src={user.profilePicture}
          alt=""
        />
        <span className="w-3 h-3 rounded-md bg-lime-500 absolute top-[-2px] right-0 border-2 border-white-500"></span>
      </div>
      <span className="font-medium">{user.username}</span>
    </li>
  );
}
