export const updateError = msg => {
  return {
    type: "UPDATE_ERROR_CITY",
    payload: msg
  };
};

export const updateCityDate = (idx, startDate, endDate) => {
  return {
    type: "UPDATE_CITY_DATE",
    payload: {
      idx: idx,
      startDate: startDate,
      endDate: endDate
    }
  };
};

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

export const reorderCity = sortedLst => {
  return {
    type: "REORDER_CITY",
    payload: sortedLst
  };
};

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

export const turnOnCalendar = id => {
  return {
    type: "TURN_ON_CALENDAR",
    payload: id
  };
};
