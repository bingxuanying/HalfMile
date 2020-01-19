import axios from "axios";

export const updateLoginEmail = email => {
  return {
    type: "UPDATE_LOGIN_EMAIL",
    payload: email
  };
};

export const updateLoginPassword = password => {
  return {
    type: "UPDATE_LOGIN_PASSWORD",
    payload: password
  };
};

export const clearLoginInfo = () => {
  return {
    type: "CLEAR_LOGIN_INFO",
    payload: null
  };
};

export const updateRegisterEmail = email => {
  return {
    type: "UPDATE_REGISTER_EMAIL",
    payload: email
  };
};

export const updateRegisterPassword = password => {
  return {
    type: "UPDATE_REGISTER_PASSWORD",
    payload: password
  };
};

export const updateRegisterRePassword = password => {
  return {
    type: "UPDATE_REGISTER_REPASSWORD",
    payload: password
  };
};

export const turnOffInfoBar = () => {
  return {
    type: "OFF_INFO_BAR",
    payload: null
  };
};

export const turnOffCalendar = id => {
  return {
    type: "TURN_OFF_CALENDAR",
    payload: id
  };
};

export const toggleCalendar = id => {
  return {
    type: "TOGGLE_CALENDAR",
    payload: id
  };
};
