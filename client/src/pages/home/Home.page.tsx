import Feed from "../../components/Feed/Feed.component";
import RightBar from "../../components/rightBar/RightBar.component";
import SideBar from "../../components/sideBar/LeftBar.component";
import TopBar from "../../components/topBar/TopBar.component";

type Props = {};

export default function Home({}: Props) {
  return (
    <div className="flex flex-col">
      <TopBar />
      <div className="mt-[5%] flex ">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}
