import React, { useState } from "react";
import { Users } from "../../data";
import { FiMoreVertical } from "react-icons/fi";
type Props = {
  post?: any;
};

export default function Post({ post }: Props) {
  const [like, setLike] = useState(post?.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="w-full rounded-md mt-[30px] share-shadow">
      <div className="p-[10px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="w-[23px] h-[32px] rounded-lg object-cover "
              //   src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="text-[15px] font-medium ml-[10px]">
              Mizan
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            </span>
            <span className="text-[12px]">{post?.date}</span>
          </div>
          <div className="">
            <FiMoreVertical />
          </div>
        </div>
        <div className="mt-[20px]">
          <span className="text-[12px]">Hey It's my first post</span>
          <img
            className="mt-[20px] w-full max-h-[500px] object-contain"
            src="assets/post/1.jpeg"
            alt=""
          />
        </div>
        <div className="flex items-center justify-between m-2 ">
          <div className="flex items-center">
            <img
              className="w-[24px] h-[24px] mr-5 cursor-pointer "
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="w-[24px] h-[24px] mr-5 cursor-pointer "
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="text-[15px]">32 people like it</span>
          </div>
          <div>
            <span className="cursor-pointer border-dashed text-[15px]">
              {post?.comment} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
