export const updateHomeAdress = home => {
  return {
    type: "CHANGE_HOME_ADDRESS",
    payload: home
  };
};

export const updateError = (section, msg) => {
  var actionType = null;
  switch (section) {
    case "init":
      actionType = "UPDATE_ERROR_INIT";
      break;
    case "city":
      actionType = "UPDATE_ERROR_CITY";
      break;
    default:
      actionType = "UPDATE_ERROR_UNKNOW";
      break;
  }
  return {
    type: actionType,
    payload: msg
  };
};
