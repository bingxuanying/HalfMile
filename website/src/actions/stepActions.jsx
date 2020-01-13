export const addCity = city => {
  return {
    type: "ADD_CITY",
    payload: city
  };
};

export const deleteCity = id => {
  return {
    type: "DELETE_CITY",
    payload: id
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
 * TODO: clear error, add home city to list
 */
export const changeSection_none2city = () => {
  return {
    type: "CHANGE_SECTION_NONE2CITY",
    payload: null
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
