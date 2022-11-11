import React from "react";
import { Posts } from "../../data";
import Post from "./Post.component";
type Props = {};

export default function PostWrapper({}: Props) {
  return (
    <div className="flex flex-col gap-[50px] ">
      {Posts?.map((itm) => {
        return <Post post={itm} key={itm.id} />;
      })}
    </div>
  );
}
