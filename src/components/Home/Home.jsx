import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import jobHunting from "../../assets/jobHunting.json";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJob from "../featuredJob/featuredJob";
import { FeaturedContext } from "../Layout/Root";

const Home = () => {
  const jobCategoryData = useLoaderData();
  const featuredJobData = useContext(FeaturedContext);

  const [featuredJob, setFeaturedJobData] = useState(featuredJobData);
  const [seeAll, setSeeAll] = useState(false);

  return (
    <div>
      {/* Banner Section */}
      <div className="bg-base-200">
        <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
          <div className="grow space-y-8">
            <h1 className="text-gray-600 text-2xl text-center md:text-left md:text-5xl font-extrabold pt-8 md:pt-0">
              One Step <br className="hidden md:block" /> Closer To Your <br />
              <span className="text-gFrom">Dream Job</span>
            </h1>
            <p className="text-subTitle">
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
          <h3 className="text-gray-600 text-2xl md:text-4xl font-extrabold">
            Job Category List
          </h3>
          <p className="text-subTitle">
            Career choices are important decisions that can shape your future.
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

      {/* Featured Jobs Section */}
      <div className="w-[95%] md:w-[80%] mx-auto pb-16 md:pb-32 space-y-8">
        <div className="text-center space-y-4">
          <h3 className="text-gray-600 text-2xl md:text-4xl font-extrabold">
            Featured Jobs
          </h3>
          <p className="text-subTitle">
            In the world of employment, featured jobs are the stars that light
            up your career path and lead you towards your dreams.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredJob
            .slice(0, seeAll ? featuredJob.length : 4)
            .map((singleData) => (
              <FeaturedJob
                key={singleData.id}
                singleData={singleData}
              ></FeaturedJob>
            ))}
        </div>
        <div className="text-center">
          {seeAll || (
            <button onClick={() => setSeeAll(true)} className="my-btn">
              See All Jobs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
