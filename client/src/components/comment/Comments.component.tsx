import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../App";
import { UserContext } from "../../context/UserContext";
import { comments } from "../../data";
import { makeRequest } from "../../utils/axios";
import { CORE_STORAGE_URL } from "../../utils/environment";
import { fetchCommentByPostId } from "../../utils/http/comment.http";
import { dummyUser, img } from "../topBar/TopBar.component";
import Comment from "./Comment.component";

type Props = {
  postId: number;
};

export default function Comments({ postId }: Props) {
  const { user } = useContext(UserContext);
  const [description, setDescription] = useState("");
  const { isLoading, isError, error, data }: any = useQuery(["comments"], () =>
    fetchCommentByPostId(postId)
  );

  const mutation: any = useMutation(
    (newComment) => {
      return makeRequest.post("/comment", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments"]);
        setDescription("");
      },
    }
  );

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="comments">
      <div
        className="write flex items-center justify-between gap-[20px]"
        style={{
          margin: "20px 0px",
        }}
      >
        <img
          src={
            user?.profilePic
              ? `${CORE_STORAGE_URL}${user?.profilePic}`
              : dummyUser
          }
          className="profile-avatar"
        />
        <input
          className="p-[10px] bg-transparent dark:text-white "
          placeholder="Write a comment"
          type={"text"}
          style={{ flex: 5 }}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button
          className="border-none bg-blue-600 text-white p-[10px] cursor-pointer"
          style={{ borderRadius: "3px" }}
          onClick={(e) => {
            e.preventDefault();
            mutation.mutate({ postId: postId, description: description });
          }}
        >
          Send
        </button>
      </div>
      {data?.map((itm: any) => {
        return <Comment comment={itm} key={itm.id} />;
      })}
    </div>
  );
}
