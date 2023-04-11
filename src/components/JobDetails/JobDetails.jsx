import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb, getDataFromDb } from "../../utilities/fakedb";
import { toast } from "react-toastify";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  AtSymbolIcon,
  MapPinIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const JobDetails = () => {
  const [singleJobData, setSingleJobData] = useState({});
  const { id: jobId } = useParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const responseFeatured = await fetch("/featuredJob.json");
        const featuredJobData = await responseFeatured.json();
        const foundData = featuredJobData.find(
          (singleData) => singleData.id === jobId
        );
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
    <>
      {/* Banner Section */}
      <div className="bg-base-200 text-center flex justify-between items-center">
        <img className="h-16 md:h-32" src={vector1} alt="" />
        <h3 className="text-gray-600 text-xl font-extrabold py-10">
          Job Details
        </h3>
        <img className="h-16 md:h-32 -mt-32" src={vector2} alt="" />
      </div>

      {/* Job Details Section */}
      <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-between py-16 md:py-32">
        <div className="md:col-span-2 space-y-4">
          <p>
            <strong className="text-gray-600">Job Description: </strong>
            <span className="text-subTitle">{job_description}</span>
          </p>
          <p>
            <strong className="text-gray-600">Job Responsibility: </strong>
            <span className="text-subTitle">{job_responsibility}</span>
          </p>
          <p>
            <strong className="text-gray-600">Educational Requirements:</strong>{" "}
            <br />
            <span className="text-subTitle">{educational_requirements}</span>
          </p>
          <p>
            <strong className="text-gray-600">Experiences: </strong> <br />
            <span className="text-subTitle">{experiences}</span>
          </p>
        </div>
        <div className="md:col-span-1 bg-base-200 rounded-md">
          <div className="flex flex-col p-6 space-y-8">
            <div className="space-y-2">
              <div className="border-b-2 border-gray-500">
                <h3 className="text-gray-600 text-lg font-extrabold">
                  Job details
                </h3>
              </div>
              <div className="space-y-2">
                <p className="flex gap-2">
                  <BuildingOffice2Icon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Company:</strong>
                  <span className="text-subTitle">{company_name}</span>
                </p>
                <p className="flex gap-2">
                  <CurrencyDollarIcon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Salary:</strong>
                  <span className="text-subTitle">{salary}</span>
                </p>
                <p className="flex gap-2">
                  <BriefcaseIcon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Job Title:</strong>
                  <span className="text-subTitle">{job_title}</span>
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="border-b-2 border-gray-500">
                <h3 className="text-gray-600 text-lg font-extrabold">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-2">
                <p className="flex gap-2">
                  <PhoneIcon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Phone:</strong>
                  <span className="text-subTitle">
                    {contact_information?.phone}
                  </span>
                </p>
                <p className="flex gap-2">
                  <AtSymbolIcon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Email:</strong>
                  <span className="text-subTitle">
                    {contact_information?.email}
                  </span>
                </p>
                <p className="flex gap-2">
                  <MapPinIcon className="h-6 w-6 text-blue-500" />
                  <strong className="text-gray-600">Address:</strong>
                  <span className="text-subTitle">{location}</span>
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
    </>
  );
};

export default JobDetails;
