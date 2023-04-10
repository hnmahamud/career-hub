import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { addToDb, getDataFromDb } from "../../utilities/fakedb";
import { toast } from "react-toastify";

const JobDetails = () => {
  const [singleJobData, setSingleJobData] = useState({});
  const { id: jobId } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const responseFeatured = await fetch("../featuredJob.json");
        const featuredJobData = await responseFeatured.json();
        const foundData = featuredJobData.find(
          (singleData) => singleData.id === jobId
        );
        console.log(foundData);
        setSingleJobData(foundData);
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, [jobId]);

  const {
    id,
    company_name,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
    location,
  } = singleJobData;

  const handleAddToDb = (id) => {
    const appliedData = getDataFromDb();
    if (id in appliedData) {
      toast.error("Already Applied!");
    } else {
      addToDb(id);
      toast("Applied Successfully!");
    }
  };

  return (
    <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between py-16 md:py-32">
      <div className="md:col-span-2 space-y-4">
        <p>
          <strong>Job Description: </strong>
          {job_description}
        </p>
        <p>
          <strong>Job Responsibility: </strong>
          {job_responsibility}
        </p>
        <p>
          <strong>Educational Requirements:</strong> <br />
          {educational_requirements}
        </p>
        <p>
          <strong>Experiences: </strong> <br />
          {experiences}
        </p>
      </div>
      <div className="md:col-span-1 bg-base-200 rounded-md">
        <div className="flex flex-col p-6 space-y-8">
          <div className="space-y-2">
            <div className="border-b-2 border-gray-500">
              <h3 className="text-xl font-extrabold">Job details</h3>
            </div>
            <div className="space-y-2">
              <p className="flex gap-2">
                <BuildingOffice2Icon className="h-6 w-6 text-blue-500" />
                <strong>Company:</strong> {company_name}
              </p>
              <p className="flex gap-2">
                <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                <strong>Salary:</strong> {salary}
              </p>
              <p className="flex gap-2">
                <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                <strong>Job Title:</strong> {job_title}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="border-b-2 border-gray-500">
              <h3 className="text-xl font-extrabold">Contact Information</h3>
            </div>
            <div className="space-y-2">
              <p className="flex gap-2">
                <PhoneIcon className="h-6 w-6 text-blue-500" />
                <strong>Phone:</strong> {contact_information?.phone}
              </p>
              <p className="flex gap-2">
                <AtSymbolIcon className="h-6 w-6 text-blue-500" />
                <strong>Email:</strong> {contact_information?.email}
              </p>
              <p className="flex gap-2">
                <MapPinIcon className="h-6 w-6 text-blue-500" />
                <strong>Address:</strong> {location}
              </p>
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => handleAddToDb(id)} className="my-btn w-full">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
