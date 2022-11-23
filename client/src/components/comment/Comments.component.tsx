import React from "react";
import { comments } from "../../data";
import { img } from "../topBar/TopBar.component";
import Comment from "./Comment.component";

type Props = {};

export default function Comments({}: Props) {
  return (
    <div className="comments">
      <div
        className="write flex items-center justify-between gap-[20px]"
        style={{
          margin: "20px 0px",
        }}
      >
        <img src={img} className="profile-avatar" />
        <input
          className="p-[10px] bg-transparent dark:text-white "
          placeholder="Write a comment"
          type={"text"}
          style={{ flex: 5 }}
        />
        <button
          className="border-none bg-blue-600 text-white p-[10px] cursor-pointer"
          style={{ borderRadius: "3px" }}
        >
          Send
        </button>
      </div>
      {comments.map((itm) => {
        return <Comment comment={itm} key={itm.id} />;
      })}
    </div>
  );
}
