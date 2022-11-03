import Post from "../../components/post/Post.component";
import Stories from "../../components/Stories/Stories.component";
import { Posts } from "../../data";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="p-[20px]">
      <Stories />
      {/* <Post post={Posts[0]} /> */}
    </div>
  );
}
