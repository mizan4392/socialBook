import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed.component";
import Login from "./pages/Login/Login.page";
import RightBar from "./components/rightBar/RightBar.component";

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
import LeftBar from "./components/sideBar/LeftBar.component";

function App() {
  const currentUser = true;
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
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>

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
          element: (
            <div>
              {Array.from(Array(50)).map((itm) => {
                return <h1>News Feed</h1>;
              })}
            </div>
          ),
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
