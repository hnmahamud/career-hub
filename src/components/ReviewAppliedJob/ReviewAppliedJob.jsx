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
    <div className="border rounded-md p-2">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div>
          <img className="w-20 h-20 rounded-md" src={company_logo} alt="" />
        </div>

        <div className="grow space-y-2">
          <h3 className="text-xl font-extrabold">{job_title}</h3>
          <p>{company_name}</p>
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
              <p>{location}</p>
            </div>

            <div className="flex">
              <CurrencyDollarIcon className="h-6 w-6 text-gray-400" />
              <p>{salary}</p>
            </div>
          </div>
        </div>

        <div>
          <Link to={`/job-details/${id}`}>
            <button className="my-btn">View details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewAppliedJob;
