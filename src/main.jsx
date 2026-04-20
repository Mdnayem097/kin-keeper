import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import FriendDetails from "./components/FriendDetails.jsx";
import Timeline from "./components/Timeline.jsx";
import Stats from "./components/Stats.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element:<Home></Home>
      },
      {
        path: "FriendDetails/:id",
        element: <FriendDetails></FriendDetails>
      },
      {
        path: "timeline", 
        element: <Timeline></Timeline>
      },
      {
        path: "stats",
        element: <Stats></Stats>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
