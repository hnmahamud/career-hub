import React from "react";

const FeaturedJob = ({ singleData }) => {
  return (
    <div className="border py-10 pl-10">
      <img src="" alt="" />
      <h3>job title</h3>
      <p>company name</p>
      <div>
        <button>remote</button>
        <button>fulltime</button>
      </div>
      <div>
        <p>location</p>
        <p>salary</p>
      </div>
      <button>View details</button>
    </div>
  );
};

export default FeaturedJob;
