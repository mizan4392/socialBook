import React from "react";
import Post from "../post/Post.component";
import Share from "../share/Share.component";

type Props = {};

export default function Feed({}: Props) {
  return (
    <div className="flex-[5.5]">
      <div className="p-20px">
        <Share />
        <Post post={undefined} />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
