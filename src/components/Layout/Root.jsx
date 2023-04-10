import React, { createContext } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FeaturedContext = createContext([]);

const Root = () => {
  const featuredJobData = useLoaderData();
  return (
    <FeaturedContext.Provider value={featuredJobData}>
      <Header></Header>
      <div className="min-h-[calc(100vh-360px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </FeaturedContext.Provider>
  );
};

export default Root;
