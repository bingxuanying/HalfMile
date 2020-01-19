import axios from "axios";

axios.defaults.baseURL = "https://api.halfmile.io";

export const fetchUserToken = userInfo => {
  return (dispatch, getState) => {
    dispatch({
      type: "CLEAR_LOGIN_INFO",
      payload: null
    });

    axios
      .post("/login", userInfo, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "FETCH_USER_TOKEN",
          payload: res.data.token
        });

        var token = getState().user.token;
        axios
          .get("/echo-login", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(res => {
            console.log(res);
            // dispatch({
            //   type: "FETCH_USER_DATA",
            //   payload: res
            // });
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: "FETCHnSEND_USER_DATA_ERROR", payload: err });
          });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "FETCHnSEND_USER_DATA_ERROR", payload: err });
      });
    // then axios.post token and fetch user data
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

export const logout = () => {
  return {
    type: "STATUS_LOGOUT",
    payload: null
  };
};
