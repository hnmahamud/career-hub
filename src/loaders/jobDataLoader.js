import axios from "axios";

const jobDataLoader = async () => {
  try {
    const responseCategory = await axios.get("jobCategory.json");
    const { data: jobCategoryData } = responseCategory;

    const responseFeatured = await axios.get("featuredJob.json");
    const { data: featuredJobData } = responseFeatured;

    return [jobCategoryData, featuredJobData];
  } catch (error) {
    console.log(error);
  }
};

export default jobDataLoader;
