export const updateHomeAdress = home => {
  return {
    type: "CHANGE_HOME_ADDRESS",
    payload: home
  };
};

export const guestIncreament = name => {
  return {
    type: "GUEST_INCREAMENT",
    payload: name
  };
};

export const guestDecrement = name => {
  return {
    type: "GUEST_DECREMENT",
    payload: name
  };
};

export const guestClear = () => {
  return {
    type: "GUEST_CLEAR",
    payload: null
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
