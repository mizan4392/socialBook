import { makeRequest } from "../axios";

export const fetchPosts = (userId: any) => {
  if (userId) {
    return makeRequest
      .get(`/post/get-logged-in-user-posts?userId=${userId}`)
      .then((res) => res.data);
  } else {
    return makeRequest
      .get("/post/get-logged-in-user-news-feed-post")
      .then((res) => res.data);
  }
};
