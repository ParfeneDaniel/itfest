import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import Request from "../pages/Request";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />
    },
    {
        path: "request",
        element: <Request />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "admin",
        element: <Admin />
    },
])