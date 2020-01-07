export const initPlan = initInfo => {
  return {
    type: "INIT",
    payload: initInfo
  };
};

export const newDays = city => {
  return {
    type: "CREAT_NEW",
    payload: city
  };
};
