export const updateHomeAdress = home => {
  return {
    type: "CHANGE_HOME_ADDRESS",
    payload: home
  };
};

export const newDays = city => {
  return {
    type: "CREAT_NEW",
    payload: city
  };
};
