import "./App.css";
import TopBar from "./components/topBar/TopBar.component";
import Home from "./pages/home/Home.page";

function App() {
  return (
    <div>
      <TopBar />
      <div className="w-full h-screen bg-white"></div>
    </div>
  );
}

export default App;
