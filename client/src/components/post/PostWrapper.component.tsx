import React from "react";
import { useQuery } from "react-query";
import { Posts } from "../../data";
import { makeRequest } from "../../utils/axios";
import Post from "./Post.component";
type Props = {};

export default function PostWrapper({}: Props) {
  const { isLoading, error, data } = useQuery(["posts"], () => {
    return makeRequest.get("post").then((res) => res.data);
  });

  console.log("data", data);
  return (
    <div className="flex flex-col gap-[50px] ">
      {isLoading ? (
        <p>loading</p>
      ) : (
        data?.map((itm: any) => {
          return <Post post={itm} key={itm.id} />;
        })
      )}
    </div>
  );
}
