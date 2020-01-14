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

export const sendRegisterInfo = registerInfo => {
  return dispatch => {
    dispatch({
      type: "CLEAR_REGISTER_INFO",
      payload: null
    });

    let headers = {
      "Content-Type": "application/json"
    };

    axios
      .post("/register", registerInfo, {
        headers: headers
      })
      .then(res => {
        console.log(res);
        // dispatch({
        //   type: "FETCH_USER_TOKEN",
        //   payload: res
        // });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "FETCHnSEND_USER_DATA_ERROR", payload: err });
      });
  };
};

export const turnOffInfoBar = () => {
  return {
    type: "OFF_INFO_BAR",
    payload: null
  };
};
