export const categoryLoader = async () => {
  try {
    const responseCategory = await fetch("/jobCategory.json");
    const jobCategoryData = await responseCategory.json();

    return jobCategoryData;
  } catch (error) {
    console.log(error);
  }
};

export const featuredLoader = async () => {
  try {
    const responseFeatured = await fetch("/featuredJob.json");
    const featuredJobData = await responseFeatured.json();

    return featuredJobData;
  } catch (error) {
    console.log(error);
  }
};
