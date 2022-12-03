import React, { useContext, useEffect, useState } from "react";
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
  useNavigate,
} from "react-router-dom";
import LeftBar from "./components/sideBar/LeftBar.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { UserContext, UserI } from "./context/UserContext";
import { get } from "./utils/http";

function App() {
  const [user, setCurrentUser] = useState<UserI | undefined>();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
  const setUser = (user: UserI) => {
    setCurrentUser(user);
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
export const queryClient = new QueryClient();
const Layout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      (async () => {
        const res = await get("/user/get-logged-in-userInfo");

        if (res.ok) {
          const data = await res.json();
          setUser && setUser(data);
        } else {
          navigate("/login");
        }
      })();
    } else {
      navigate("/login");
    }
    console.log("token", token);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};
