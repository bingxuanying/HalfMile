const initialState = {
  loginInfo: {
    email: null,
    password: null
  },
  registerInfo: {
    email: null,
    password: null
    // rePassword: null
  },
  InfoBar: false,
  calendarOnID: null
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOGIN_EMAIL":
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          email: action.payload
        }
      };
    case "UPDATE_LOGIN_PASSWORD":
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          password: action.payload
        }
      };
    case "CLEAR_LOGIN_INFO":
      return {
        ...state,
        loginInfo: {
          ...state.loginInfo,
          email: null,
          password: null
        }
      };

    case "UPDATE_REGISTER_EMAIL":
      return {
        ...state,
        registerInfo: {
          ...state.registerInfo,
          email: action.payload
        }
      };
    case "UPDATE_REGISTER_PASSWORD":
      return {
        ...state,
        registerInfo: {
          ...state.registerInfo,
          password: action.payload
        }
      };
    case "UPDATE_REGISTER_REPASSWORD":
      return {
        ...state,
        registerInfo: {
          ...state.registerInfo,
          rePassword: action.payload
        }
      };
    case "CLEAR_REGISTER_INFO":
      return {
        ...state,
        registerInfo: {
          email: null,
          password: null,
          rePassword: null
        }
      };

    case "UPDATE_ERROR_CITY":
      return { ...state, InfoBar: true };
    case "OFF_INFO_BAR":
      return { ...state, InfoBar: false };

    case "TOGGLE_CALENDAR":
      return {
        ...state,
        calendarOnID:
          action.payload === state.calendarOnID ? null : action.payload
      };

    case "TURN_OFF_CALENDAR":
      return { ...state, calendarOnID: action.payload };

    case "ADD_CITY":
      return { ...state, calendarOnID: null };

    default:
      return state;
  }
};

export default stateReducer;
