import React, { useEffect, useState } from "react";
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
          <div
            style={{ flex: 6 }}
            className="no-scrollbar sticky top-[70px] h-[calc(100vh-70px)] overflow-scroll dark:text-white dark:bg-gray-800"
          >
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
          element: <Home />,
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

  return <RouterProvider router={router} />;
}

export default App;
