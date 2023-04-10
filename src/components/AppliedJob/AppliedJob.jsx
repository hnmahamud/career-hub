import React, { useContext, useEffect, useState } from "react";
import { FeaturedContext } from "../Layout/Root";
import { getDataFromDb } from "../../utilities/fakedb";
import ReviewAppliedJob from "../ReviewAppliedJob/ReviewAppliedJob";

const AppliedJob = () => {
  const featuredJobData = useContext(FeaturedContext);
  const [jobData, setJobData] = useState(featuredJobData);

  useEffect(() => {
    const appliedJob = [];
    const appliedJobID = getDataFromDb();
    for (const id in appliedJobID) {
      const found = jobData.find((singleData) => singleData.id === id);
      if (found) {
        appliedJob.push(found);
      }
    }
    console.log(appliedJob);
    setJobData(appliedJob);
  }, []);

  return (
    <div className="w-[95%] md:w-[80%] mx-auto flex flex-col gap-4 py-16 md:py-32">
      {jobData.map((singleData) => (
        <ReviewAppliedJob key={singleData.id} singleData={singleData} />
      ))}
    </div>
  );
};

export default AppliedJob;
