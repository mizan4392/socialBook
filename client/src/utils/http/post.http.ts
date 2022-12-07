import { makeRequest } from "../axios";

export const fetchPosts = (isProfile: boolean) => {
  if (isProfile) {
    return makeRequest
      .get("/post/get-logged-in-user-posts")
      .then((res) => res.data);
  } else {
    return makeRequest
      .get("/post/get-logged-in-user-news-feed-post")
      .then((res) => res.data);
  }
};
