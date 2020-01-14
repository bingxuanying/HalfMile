import axios from "axios";

export const fetchUserToken = userInfo => {
  return dispatch => {
    dispatch({
      type: "CLEAR_LOGIN_INFO",
      payload: null
    });

    let headers = {
      "Content-Type": "application/json"
    };

    axios
      .post("/login", userInfo, {
        headers: headers
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: "FETCH_USER_TOKEN",
          payload: res
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "FETCHnSEND_USER_DATA_ERROR", payload: err });
      });
    // then axios.post token and fetch user data
  };
};

export const logout_update = () => {
  return {
    type: "STATUS_LOGOUT",
    payload: null
  };
};
