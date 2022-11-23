import React from "react";
import { CommentDataI } from "../../data";

type Props = {
  comment: CommentDataI;
};

export default function Comment({ comment }: Props) {
  return (
    <div
      className="comment flex justify-between gap-[20px]"
      style={{
        margin: "30px 0px",
      }}
    >
      <img src={comment.profilePicture} alt="a" className="profile-avatar" />
      <div className="info flex flex-col gap-[3px] items-start ">
        <span className="font-medium">{comment.name}</span>
        <p className="">{comment.desc}</p>
      </div>
      <span
        className="date text-gray-500 dark:text-white "
        style={{
          flex: 1,
          alignSelf: "center",

          fontSize: "12px",
        }}
      >
        1h ago{" "}
      </span>
    </div>
  );
}
