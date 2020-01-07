export const addCity = num => {
  return {
    type: "UPDATE_CITYnDAY",
    payload: num
  };
};

export const deleteCity = num => {
  return {
    type: "DELETE_CITYnDAY",
    payload: num
  };
};

export const changeSection = section => {
  return {
    type: "CHANGE_SECTION",
    payload: section
  };
};

export const changePage = num => {
  return {
    type: "CHANGE_PAGE",
    payload: num
  };
};

export const nextPage = () => {
  return {
    type: "NEXT_PAGE",
    payload: null
  };
};

export const prePage = () => {
  return {
    type: "PRE_PAGE",
    payload: null
  };
};
