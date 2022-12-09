import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { Posts } from "../../data";
import { makeRequest } from "../../utils/axios";
import { fetchPosts } from "../../utils/http/post.http";
import Post from "./Post.component";
type Props = {
  isProfile?: boolean;
};

export default function PostWrapper({ isProfile = false }: Props) {
  const location = useLocation();
  const { isLoading, isError, error, data, isFetching }: any = useQuery(
    [isProfile ? "personalPosts" : "posts"],
    () => {
      const parts = location?.pathname?.split("/");
      const id = parts[parts.length - 1];
      return fetchPosts(isProfile ? id : null);
    }
  );
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-[50px] ">
      {isFetching
        ? "Loading..."
        : data &&
          data?.map((itm: any) => {
            return <Post post={itm} key={itm.id} />;
          })}
    </div>
  );
}
