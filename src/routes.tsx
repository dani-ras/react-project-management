import { RouteObject } from "react-router-dom";
import { App } from "./components/App";
import { Login } from "./components/Login/Login";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />,
        children: [
            {
                path: "/*",
                element: <App />
            }
        ]
    }
]