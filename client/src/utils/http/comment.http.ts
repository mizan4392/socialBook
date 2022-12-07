import { makeRequest } from "../axios";

export const fetchCommentByPostId = (postId: any) => {
  return makeRequest
    .get(`/comment/by-postId?postId=${postId}`)
    .then((res) => res.data);
};
