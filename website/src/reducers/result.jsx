const initialState = {
  keyword: null,
  resultList: []
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_KEYWORD":
      return { ...state, keyword: action.payload };
    case "FETCH_DATA":
      return { ...state, resultList: action.payload };
    default:
      return state;
  }
};

export default stateReducer;
