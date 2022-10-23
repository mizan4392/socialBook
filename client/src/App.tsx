import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed.component";
import Login from "./pages/Login/Login.page";
import RightBar from "./components/rightBar/RightBar.component";
import SideBar from "./components/sideBar/SideBar.component";
import TopBar from "./components/topBar/TopBar.component";
import Home from "./pages/home/Home.page";
import Profile from "./pages/Profile/Profile.page";
import Register from "./pages/Register/Register.page";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {
  const currentUser = null;
  const ProtectedRoute = ({ children }: any) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <div>
        <TopBar />
        <div className="flex">
          <SideBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Feed />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
