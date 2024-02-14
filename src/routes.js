import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts.js";
import Login from "./components/Login.jsx";
import Chat from "./components/Chat.jsx";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: Chat
    }
]

