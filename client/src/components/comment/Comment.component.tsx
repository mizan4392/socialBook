import moment from "moment";
import React from "react";
import { CommentDataI } from "../../data";
import { CORE_STORAGE_URL } from "../../utils/environment";
import { dummyUser } from "../topBar/TopBar.component";

type Props = {
  comment: any;
};

export default function Comment({ comment }: Props) {
  return (
    <div
      className="comment flex justify-between gap-[20px]"
      style={{
        margin: "30px 0px",
      }}
    >
      <img
        src={
          comment?.user?.profilePic
            ? `${CORE_STORAGE_URL}/${comment?.user?.profilePic}`
            : dummyUser
        }
        alt="a"
        className="profile-avatar"
      />
      <div className="info flex flex-col gap-[3px] items-start ">
        <span className="font-medium">{comment.user.userName}</span>
        <p className="">{comment.description}</p>
      </div>
      <span
        className="date text-gray-500 dark:text-white "
        style={{
          flex: 1,
          alignSelf: "center",

          fontSize: "12px",
        }}
      >
        {moment(comment.createdAt).fromNow()}
      </span>
    </div>
  );
}
