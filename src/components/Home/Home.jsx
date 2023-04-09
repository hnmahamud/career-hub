import React from "react";
import Lottie from "lottie-react";
import jobHunting from "../../assets/jobHunting.json";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";

const Home = () => {
  const { data: jobCategoryData } = useLoaderData();
  return (
    <div>
      {/* Header Section */}
      <div className="bg-base-200">
        <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
          <div className="grow space-y-8">
            <h1 className="text-2xl text-center md:text-left md:text-5xl font-extrabold pt-8 md:pt-0">
              One Step <br className="hidden md:block" /> Closer To Your{" "}
              <br className="hidden md:block" />
              <span className="text-gFrom">Dream Job</span>
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="my-btn">Get Started</button>
          </div>
          <div className="grow-0">
            <Lottie animationData={jobHunting} loop={true} />
          </div>
        </div>
      </div>

      {/* Job Category Section */}
      <div className="w-[95%] md:w-[80%] mx-auto py-16 md:py-32 space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-2xl md:text-4xl font-extrabold">
            Job Category List
          </h3>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {jobCategoryData.map((singleData) => (
            <JobCategory
              key={singleData.id}
              singleData={singleData}
            ></JobCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
