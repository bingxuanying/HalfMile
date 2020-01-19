export const updateError = msg => {
  return {
    type: "UPDATE_ERROR_CITY",
    payload: msg
  };
};

export const updateCityDate = (idx, startDate, endDate, dayDiff) => {
  return {
    type: "UPDATE_CITY_DATE",
    payload: {
      idx: idx,
      startDate: startDate,
      endDate: endDate,
      dayDiff: dayDiff
    }
  };
};

export const addCity = city => {
  return {
    type: "ADD_CITY",
    payload: city
  };
};

export const deleteCity = (numOfDelete, itemIdx, preDate, dateLst) => {
  return {
    type: "DELETE_CITY",
    payload: {
      numOfDelete: numOfDelete,
      itemIdx: itemIdx,
      preDate: preDate,
      dateLst: dateLst
    }
  };
};

export const reorderCity = (sortedCityLst, sortedPlanLst) => {
  return {
    type: "REORDER_CITY",
    payload: { sortedCityLst: sortedCityLst, sortedPlanLst: sortedPlanLst }
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

export const nextPage = days => {
  return {
    type: "NEXT_PAGE",
    payload: days
  };
};

export const prePage = days => {
  return {
    type: "PRE_PAGE",
    payload: days
  };
};

export const turnOnCalendar = id => {
  return {
    type: "TURN_ON_CALENDAR",
    payload: id
  };
};
