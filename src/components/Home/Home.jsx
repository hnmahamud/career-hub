import React from "react";
import Lottie from "lottie-react";
import findJob from "../../assets/jobHunting.json";

const Home = () => {
  return (
    // Header Section
    <div className="bg-base-200">
      <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-4">
        <div className="grow space-y-8">
          <h1 className="text-2xl text-center md:text-left md:text-5xl font-extrabold pt-8 md:pt-0">
            One Step <br className="hidden md:block" /> Closer To Your{" "}
            <br className="hidden md:block" />
            <span className="text-gFrom">Dream Job</span>
          </h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="my-btn">Get Started</button>
        </div>
        <div className="grow-0">
          <Lottie animationData={findJob} loop={true} />
        </div>
      </div>
    </div>
  );
};
// w-[98%] md:w-[80%] mx-auto

export default Home;
