import React, { useContext, useEffect, useState } from "react";
import { FeaturedContext } from "../Layout/Root";
import { getDataFromDb } from "../../utilities/fakedb";
import ReviewAppliedJob from "../ReviewAppliedJob/ReviewAppliedJob";

const AppliedJob = () => {
  const featuredJobData = useContext(FeaturedContext);
  const [jobData, setJobData] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const appliedJob = [];
    const appliedJobID = getDataFromDb();
    for (const id in appliedJobID) {
      const found = featuredJobData.find((singleData) => singleData.id === id);
      if (found) {
        appliedJob.push(found);
      }
    }
    setJobData(appliedJob);
  }, []);

  const handleFilter = (event) => {
    if (event.target.value == "All") {
      setSelected(event.target.value);

      const appliedJob = [];
      const appliedJobID = getDataFromDb();
      for (const id in appliedJobID) {
        const found = featuredJobData.find(
          (singleData) => singleData.id === id
        );
        if (found) {
          appliedJob.push(found);
        }
        setJobData(appliedJob);
      }
    } else {
      setSelected(event.target.value);

      const appliedJob = [];
      const appliedJobID = getDataFromDb();
      for (const id in appliedJobID) {
        const found = featuredJobData.find(
          (singleData) => singleData.id === id
        );
        if (found) {
          appliedJob.push(found);
        }
      }

      const filter = appliedJob.filter(
        (singleData) => singleData.remote_or_onsite === event.target.value
      );
      setJobData(filter);
    }
  };

  return (
    <div className="w-[95%] md:w-[80%] mx-auto flex flex-col gap-4 py-16 md:py-32">
      <div className="flex md:justify-end">
        <select
          value={selected}
          onChange={handleFilter}
          className="select select-bordered"
        >
          <option value="All">Filter By</option>
          <option value="Onsite">Onsite</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {jobData.length > 0 ? (
        jobData.map((singleData) => (
          <ReviewAppliedJob key={singleData.id} singleData={singleData} />
        ))
      ) : (
        <div className="text-center ">
          <div className="alert rounded-md shadow-md bg-white border">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>No data found!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppliedJob;
