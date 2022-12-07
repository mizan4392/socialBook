import moment from "moment";
import React, { useContext, useEffect, useState } from "react";

import { FiMoreVertical } from "react-icons/fi";
import {
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
  MdOutlineTextsms,
  MdShare,
} from "react-icons/md";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { makeRequest } from "../../utils/axios";
import { CORE_STORAGE_URL } from "../../utils/environment";
import Comments from "../comment/Comments.component";
import { dummyUser } from "../topBar/TopBar.component";
type Props = {
  post?: any;
};

export default function Post({ post }: Props) {
  const { user } = useContext(UserContext);
  const [like, setLike] = useState<any>(false);
  const [likes, setLikes] = useState(post?.likes?.length | 0);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [commentCount, setCommentCount] = useState(post?.comments | 0);

  const postLikeMutation: any = useMutation(
    (data: any) =>
      like
        ? makeRequest.delete(`/like?postId=${data.postId}`)
        : makeRequest.post("/like", data),
    {
      onSuccess: () => {
        if (like) {
          setLike(false);
          setLikes((like) => like - 1);
        } else {
          setLike(true);
          setLikes((like) => like + 1);
        }
      },
    }
  );

  useEffect(() => {
    if (user) {
      setLike(
        post?.likes?.find((itm: any) => itm.user.id === user?.id) ? true : false
      );
    }
  }, [user]);
  const likeHandler = (postId: number) => {
    if (like) {
      //remove
      postLikeMutation.mutate({ postId });
    } else {
      //add
      postLikeMutation.mutate({
        postId: post.id,
      });
    }
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
              src={
                post?.user?.profilePic
                  ? `${CORE_STORAGE_URL}${post?.user?.profilePic}`
                  : dummyUser
              }
              className="profile-avatar"
              alt="s"
            />
            <div className="details flex flex-col">
              <Link
                to={`/profile/${post?.user?.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name font-medium">{post.user.userName}</span>
              </Link>
              <span className="date text-[12px]">
                {moment(post.createdAt).fromNow()}
              </span>
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
            src={`${CORE_STORAGE_URL}/${post?.postImage}`}
          />
        </div>
        <div className="info flex items-center gap-[20px]">
          <div
            className="items flex items-center gap-[10px] cursor-pointer text-sm "
            onClick={() => likeHandler(post.id)}
          >
            {like ? (
              <MdOutlineFavorite style={{ color: "red" }} />
            ) : (
              <MdOutlineFavoriteBorder />
            )}
            {likes} likes
          </div>
          <div
            className="items flex items-center gap-[10px] cursor-pointer text-sm"
            onClick={() => setIsCommentOpen(!isCommentOpen)}
          >
            <MdOutlineTextsms />
            {commentCount} comments
          </div>
          <div className="items flex items-center gap-[10px] cursor-pointer text-sm">
            <MdShare />
            12 share
          </div>
        </div>
        {isCommentOpen ? (
          <Comments
            postId={post?.id}
            setUpdatedCommentCount={(count) => setCommentCount(count)}
          />
        ) : null}
      </div>
    </div>
  );
}
