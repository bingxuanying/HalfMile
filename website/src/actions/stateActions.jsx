export const displayLoginWindow = () => {
  return {
    type: "DISPLAY_LOGIN_WINDOW",
    payload: null
  };
};

export const displayRegisterWindow_click = () => {
  return {
    type: "TOGGLE_REGISTER_WINDOW",
    payload: null
  };
};

export const turnOnInfoBar = () => {
  return {
    type: "ON_INFO_BAR",
    payload: null
  };
};

export const turnOffInfoBar = () => {
  return {
    type: "OFF_INFO_BAR",
    payload: null
  };
};
