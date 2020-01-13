export const updateKeyword = keyword => {
  return {
    type: "UPDATE_KEYWORD",
    payload: keyword
  };
};

export const fetchData = keyword => {
  return {
    type: "FETCH_DATA",
    payload: keyword
  };
};
