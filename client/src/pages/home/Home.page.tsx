import Post from "../../components/post/Post.component";
import PostWrapper from "../../components/post/PostWrapper.component";
import Stories from "../../components/Stories/Stories.component";
import { Posts } from "../../data";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="p-[20px]">
      <Stories />
      <PostWrapper />
    </div>
  );
}
