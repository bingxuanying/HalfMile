const initialState = 0;

const couterReducer = (state = initialState, action) => {
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
