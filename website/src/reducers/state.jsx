const initialState = {
  loginWindow: false,
  registerWindow: false,
  InfoBar: false
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOOGLE_LOGIN_WINDOW":
      return { ...state, loginWindow: !state.loginWindow };
    case "TOGGLE_REGISTER_WINDOW":
      return { ...state, registerWindow: !state.registerWindow };
    case "UPDATE_ERROR_CITY":
      return { ...state, InfoBar: true };
    case "OFF_INFO_BAR":
      return { ...state, InfoBar: false };
    default:
      return state;
  }
};

export default stateReducer;
