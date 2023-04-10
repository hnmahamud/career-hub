export const getDataFromDb = () => {
  let appliedJob = {};
  const isAvailable = localStorage.getItem("applied-job");
  if (isAvailable) {
    appliedJob = JSON.parse(isAvailable);
  }
  return appliedJob;
};

export const addToDb = (id) => {
  let appliedJob = {};

  const isAvailable = JSON.parse(localStorage.getItem("applied-job"));
  if (isAvailable) {
    if (id in isAvailable) {
      appliedJob = { ...isAvailable };
    } else {
      appliedJob = { ...isAvailable, [id]: 1 };
    }
  } else {
    appliedJob = { [id]: 1 };
  }

  localStorage.setItem("applied-job", JSON.stringify(appliedJob));
};

export const removeFromDb = (id) => {
  const isAvailable = JSON.parse(localStorage.getItem("applied-job"));
  if (isAvailable && id in isAvailable) {
    delete isAvailable[id];
    localStorage.setItem("applied-job", JSON.stringify(isAvailable));
  }
};

export const deleteShoppingCart = () => {
  localStorage.removeItem("applied-job");
};
