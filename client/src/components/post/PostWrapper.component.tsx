import React from "react";
import { useQuery } from "react-query";
import { Posts } from "../../data";
import { makeRequest } from "../../utils/axios";
import { fetchPosts } from "../../utils/http/post.http";
import Post from "./Post.component";
type Props = {};

export default function PostWrapper({}: Props) {
  const { isLoading, isError, error, data }: any = useQuery(
    ["posts"],
    fetchPosts
  );

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex flex-col gap-[50px] ">
      {data &&
        data?.map((itm: any) => {
          return <Post post={itm} key={itm.id} />;
        })}
    </div>
  );
}
