import React from "react";

const JobCategory = ({ singleData }) => {
  const { logo, name, jobs_available } = singleData;
  return (
    <div className="bg-base-200 rounded-md flex flex-col justify-center items-center text-center py-10 space-y-4">
      <div>
        <img className="h-10 w-10" src={logo} alt="" />
      </div>
      <div>
        <h4 className="text-gray-600 text-lg md:text-xl font-extrabold">
          {name}
        </h4>
        <p className="text-subTitle">{jobs_available} jobs available</p>
      </div>
    </div>
  );
};

export default JobCategory;
