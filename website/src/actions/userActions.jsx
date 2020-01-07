export const login_update = userInfo => {
  return {
    type: "STATUS_LOGIN",
    payload: userinfo
  };
};

export const logout_update = () => {
  return {
    type: "STATUS_LOGOUT",
    payload: null
  };
};
