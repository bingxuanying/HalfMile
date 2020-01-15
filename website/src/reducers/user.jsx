const initialState = {
  isLogin: false,
  userInfo: {
    name: null,
    email: null,
    address: null,
    paymentMethod: [],
    plans: [],
    orders: []
  },
  token: null,
  error: "none"
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_TOKEN":
      return { ...state, token: action.payload, isLogin: true };
    case "FETCH_USER_DATA":
      return { ...state, userInfo: action.payload };
    case "FETCHnSEND_USER_DATA_ERROR":
      return { ...state, error: action.payload };
    case "STATUS_LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
