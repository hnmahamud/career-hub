import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import jobDataLoader from "./loaders/jobDataLoader";
import AppliedJob from "./components/AppliedJob/AppliedJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: jobDataLoader,
      },
      {
        path: "/applied-job",
        element: <AppliedJob></AppliedJob>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
