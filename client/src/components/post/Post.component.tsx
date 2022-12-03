import React, { useState } from "react";

import { FiMoreVertical } from "react-icons/fi";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineTextsms,
  MdShare,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { PostI, Users } from "../../data";
import Comments from "../comment/Comments.component";
type Props = {
  post?: any;
};

export default function Post({ post }: Props) {
  const [like, setLike] = useState<any>(post?.like);
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="shadow dark:bg-gray-800 dark:text-white"
      style={{
        borderRadius: "20px",
      }}
    >
      <div className="container p-[20px]   ">
        <div className="user flex items-center justify-between">
          <div className="user-info flex gap-[20px] ">
            <img
              src={post?.user.profilePic}
              className="profile-avatar"
              alt="s"
            />
            <div className="details flex flex-col">
              <Link
                to={`/profile/${post?.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name font-medium">{post.user.userName}</span>
              </Link>
              <span className="date text-[12px]">1min ago</span>
            </div>
          </div>
          <div>
            <FiMoreVertical />
          </div>
        </div>
        <div
          className="content "
          style={{
            margin: "20px 0px",
          }}
        >
          <p>{post?.description}</p>
          <img
            className="w-full max-h-[500px] object-cover"
            src={post?.postImage}
          />
        </div>
        <div className="info flex items-center gap-[20px]">
          <div className="items flex items-center gap-[10px] cursor-pointer text-sm ">
            {like ? (
              <MdOutlineFavorite style={{ color: "red" }} />
            ) : (
              <MdOutlineFavoriteBorder />
            )}
            12 likes
          </div>
          <div
            className="items flex items-center gap-[10px] cursor-pointer text-sm"
            onClick={() => setIsCommentOpen(!isCommentOpen)}
          >
            <MdOutlineTextsms />
            12 comments
          </div>
          <div className="items flex items-center gap-[10px] cursor-pointer text-sm">
            <MdShare />
            12 share
          </div>
        </div>
        {isCommentOpen ? <Comments /> : null}
      </div>
    </div>
  );
}

//

// <div className="w-full rounded-md mt-[30px] share-shadow">
// <div className="p-[10px]">
//   <div className="flex items-center justify-between">
//     <div className="flex items-center">
//       <img
//         className="w-[23px] h-[32px] rounded-lg object-cover "
//         src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//         alt=""
//       />
//       <span className="text-[15px] font-medium ml-[10px]">
//         {Users.filter((u) => u.id === post?.userId)[0].username}
//       </span>
//       <span className="ml-2 text-[12px]">{post?.date}</span>
//     </div>
// <div className="">
//   <FiMoreVertical />
// </div>
//   </div>
//   <div className="mt-[20px]">
//     <span className="text-[12px]">{post?.desc}</span>
//     <img
//       className="mt-[20px] w-full max-h-[500px] object-contain"
//       src={post?.photo}
//       alt=""
//     />
//   </div>
// <div className="flex items-center justify-between m-2 ">
//   <div className="flex items-center">
//     <img
//       className="w-[24px] h-[24px] mr-5 cursor-pointer "
//       src="assets/like.png"
//       onClick={likeHandler}
//       alt=""
//     />
//     <img
//       className="w-[24px] h-[24px] mr-5 cursor-pointer "
//       src="assets/heart.png"
//       onClick={likeHandler}
//       alt=""
//     />
//     <span className="text-[15px]">32 people like it</span>
//   </div>
//   <div>
//     <span className="cursor-pointer border-dashed text-[15px]">
//       {post?.comment} comments
//     </span>
//   </div>
// </div>
// </div>
// </div>
