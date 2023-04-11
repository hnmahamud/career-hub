import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ReviewAppliedJob = ({ singleData }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = singleData;
  return (
    <div className="border rounded-md shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex justify-center items-center md:justify-start md:items-start">
          <img className="w-20 h-20 rounded-md" src={company_logo} alt="" />
        </div>

        <div className="flex flex-col justify-center items-center md:justify-start md:items-start grow space-y-2">
          <h3 className="text-gray-600 text-xl font-extrabold">{job_title}</h3>
          <p className="text-subTitle">{company_name}</p>
          <div className="flex gap-4">
            <button type="button" className="my-btn2">
              {remote_or_onsite}
            </button>

            <button type="button" className="my-btn2">
              {fulltime_or_parttime}
            </button>
          </div>
          <div className="md:flex md:gap-4 space-y-2 md:space-y-0">
            <div className="flex">
              <MapPinIcon className="h-6 w-6 text-gray-400" />
              <p className="text-subTitle">{location}</p>
            </div>

            <div className="flex">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              <p className="text-subTitle">{salary}</p>
            </div>
          </div>
        </div>

        <div>
          <Link to={`/job-details/${id}`}>
            <button className="my-btn w-full md:w-auto">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewAppliedJob;
