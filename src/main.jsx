import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./components/Layout/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blogs from "./components/Blogs/Blogs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AppliedJob from "./components/AppliedJob/AppliedJob";
import JobDetails from "./components/JobDetails/JobDetails";
import { categoryLoader, featuredLoader } from "./loaders/jobDataLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: featuredLoader,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: categoryLoader,
        element: <Home></Home>,
      },
      {
        path: "/job-details/:id",
        element: <JobDetails></JobDetails>,
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
