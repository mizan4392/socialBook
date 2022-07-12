import React from "react";
import { Posts } from "../../data";
import Post from "../post/Post.component";
import Share from "../share/Share.component";

type Props = {};

export default function Feed({}: Props) {
  return (
    <div className="flex-[5.5]">
      <div className="p-20px">
        <Share />
        {Posts?.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
