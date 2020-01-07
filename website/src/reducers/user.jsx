const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STATUS_LOGIN":
      return action.payload;
    case "STATUS_LOGOUT":
      return null;
    default:
      return state;
  }
};

export default userReducer;
