import "./App.css";
import Feed from "./components/Feed/Feed.component";
import RightBar from "./components/rightBar/RightBar.component";
import SideBar from "./components/sideBar/SideBar.component";
import TopBar from "./components/topBar/TopBar.component";
import Home from "./pages/home/Home.page";

function App() {
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

export default App;
