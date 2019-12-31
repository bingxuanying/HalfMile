const couterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREAMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default couterReducer;
