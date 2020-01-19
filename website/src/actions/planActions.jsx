export const updateHomeAdress = home => {
  return {
    type: "CHANGE_HOME_ADDRESS",
    payload: home
  };
};

export const updateInitStartDate = date => {
  return {
    type: "UPDATE_INIT_START_DATE",
    payload: date
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

export const updateFlight = (info, position) => {
  return {
    type: "UPDATE_FLIGHT",
    payload: { info: info, position: position }
  };
};

export const updateHotel = (info, city) => {
  return {
    type: "UPDATE_HOTEL",
    payload: { info: info, city: city }
  };
};

export const updateActivity = (activity, day) => {
  return {
    type: "UPDATE_ACTIVITY",
    payload: { activity: activity, day: day }
  };
};
