import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Signup } from "./components/signup";
import { Login } from "./components/login";
import { Not__Found } from "./components/404";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    ),
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path:"/Signup",
    element: <Signup/>
  },
  {
    path:"*",
    element: <Not__Found />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);