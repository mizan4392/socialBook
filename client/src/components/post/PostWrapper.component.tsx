import React from "react";
import { useQuery } from "react-query";
import { Posts } from "../../data";
import { makeRequest } from "../../utils/axios";
import { fetchPosts } from "../../utils/http/post.http";
import Post from "./Post.component";
type Props = {
  isProfile?: boolean;
};

export default function PostWrapper({ isProfile = false }: Props) {
  const { isLoading, isError, error, data }: any = useQuery(
    [isProfile ? "personalPosts" : "posts"],
    () => fetchPosts(isProfile)
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
