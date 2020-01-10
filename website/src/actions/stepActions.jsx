export const addCity = city => {
  return {
    type: "ADD_CITY",
    payload: city
  };
};

export const deleteCity = city => {
  return {
    type: "DELETE_CITY",
    payload: city
  };
};

export const reorderCity = (startIndex, endIndex) => {
  return {
    type: "REORDER_CITY",
    payload: {
      startIndex: startIndex,
      endIndex: endIndex
    }
  };
};

/*
 * TODO: clear error
 */
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
