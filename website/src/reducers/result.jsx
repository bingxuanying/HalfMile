const initialState = {
  keyword: null,
  resultList: null,
  error: "none"
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_KEYWORD":
      return { ...state, keyword: action.payload };
    case "FETCH_ACTIVITY_DATA":
      return { ...state, resultList: action.payload };
    case "FETCH_ACTIVITY_DATA_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default stateReducer;
