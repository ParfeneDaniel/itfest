import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Request from "../pages/Request";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Post from "../pages/Post";
import DashboardStudent from "../pages/DashboardStudent";
import DashboardFaculty from "../pages/DashboardFaculty";
import Leaderboard from "../pages/Leaderboard";
import CreatePost from "../pages/CreatePost";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "/request",
        element: <Request />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/post",
        element: <Post />
    },
    {
        path: "student",
        element: <DashboardStudent />
    },
    {
        path: "/decan",
        element: <DashboardFaculty />
    },
    {
        path: "leaderboard",
        element: <Leaderboard />
    },
    {
        path: "create",
        element: <CreatePost />
    },
    {
        path: "profile",
        element: <Profile />
    },
])