import Post from "../../components/post/Post.component";
import PostWrapper from "../../components/post/PostWrapper.component";
import Stories from "../../components/Stories/Stories.component";
import { Posts } from "../../data";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="p-[10px] tab:p-[20px] lg:px-[20px] lg:py-[70px]">
      <Stories />
      <PostWrapper />
    </div>
  );
}
