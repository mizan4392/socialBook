import { makeRequest } from "../axios";

export const fetchPosts = () => {
  return makeRequest
    .get("/post/get-logged-in-user-news-feed-post")
    .then((res) => res.data);
};
