import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-base-200">
      <div className="md:w-[80%] md:mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="flex flex-col gap-4 text-subTitle dropdown-content mt-3 p-2 shadow bg-base-200 w-52"
            >
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) => (isActive ? "text-gFrom" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/applied-job"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) => (isActive ? "text-gFrom" : "")}
                >
                  Applied Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) => (isActive ? "text-gFrom" : "")}
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  aria-label="Home"
                  title="Home"
                  className={({ isActive }) => (isActive ? "text-gFrom" : "")}
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="text-title text-3xl font-extrabold">JobPoint</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-subTitle flex gap-8">
            <li>
              <NavLink
                to="/"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-gFrom" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied-job"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-gFrom" : "")}
              >
                Applied Job
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-gFrom" : "")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                aria-label="Home"
                title="Home"
                className={({ isActive }) => (isActive ? "text-gFrom" : "")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button type="button" class="my-btn">
            Start Applying
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
