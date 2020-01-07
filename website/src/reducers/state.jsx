const initialState = {
  loginWindow: false,
  registerWindow: false
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_LOGIN_WINDOW":
      return { ...state, loginWindow: !state.loginWindow };
    case "DISPLAY_REGISTER_WINDOW":
      return { ...state, registerWindow: !state.registerWindow };
    default:
      return state;
  }
};

export default stateReducer;
