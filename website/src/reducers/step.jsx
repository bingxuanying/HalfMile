// section: "city" || "airline" || "hotel" || "activity" || "checkout" || "finished"
const initialState = {
  section: "none",
  page: 1,
  cities: [],
  days: 0,
  err: "none"
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ERROR_CITY":
      return {
        ...state,
        err: action.payload
      };

    case "ADD_CITY":
      return {
        ...state,
        cities: state.cities.concat(action.payload),
        err: "none"
      };

    case "DELETE_CITY":
      var newCities = state.cities.filter(
        city => !action.payload.includes(city.id)
      );

      return {
        ...state,
        cities: newCities
      };

    case "REORDER_CITY":
      return {
        ...state,
        cities: action.payload,
        err: "none"
      };

    case "CHANGE_SECTION_NONE2CITY":
      return {
        ...state,
        section: "city",
        page: 1
      };

    case "CHANGE_SECTION":
      return {
        ...state,
        section: action.payload,
        page: 1
      };

    case "CHANGE_PAGE":
      return {
        ...state,
        page: action.payload
      };

    case "NEXT_PAGE":
      let nextSection = null;
      let nextPage = null;

      if (state.section === "city") {
        if (state.cities.length === 0) {
          return {
            ...state,
            err: "Please Add City"
          };
        }

        nextSection = "airline";
        nextPage = 1;
      } else if (state.section === "airline") {
        nextSection =
          state.page + 1 > state.cities.length ? "hotel" : "airline";
        nextPage = state.page + 1 > state.cities.length ? 1 : state.page + 1;
      } else if (state.section === "hotel") {
        nextSection =
          state.page + 1 > state.cities.length ? "activity" : "hotel";
        nextPage = state.page + 1 > state.cities.length ? 1 : state.page + 1;
      } else if (state.section === "activity") {
        nextSection = state.page + 1 > state.days ? "checkout" : "activity";
        nextPage = state.page + 1 > state.days ? 1 : state.page + 1;
      } else if (state.section === "checkout") {
        nextSection = "finished";
        nextPage = 1;
      }

      return {
        ...state,
        section: nextSection,
        page: nextPage
      };

    case "PRE_PAGE":
      let preSection = null;
      let prePage = null;

      if (state.section === "airline") {
        preSection = state.page - 1 < 1 ? "city" : "airline";
        prePage = state.page - 1 < 1 ? 1 : state.page - 1;
      } else if (state.section === "hotel") {
        preSection = state.page - 1 < 1 ? "airline" : "hotel";
        prePage = state.page - 1 < 1 ? state.cities.length : state.page - 1;
      } else if (state.section === "activity") {
        preSection = state.page - 1 < 1 ? "hotel" : "activity";
        prePage = state.page - 1 < 1 ? state.cities.length : state.page - 1;
      } else if (state.section === "checkout") {
        preSection = "activity";
        prePage = state.days;
      }

      return {
        ...state,
        section: preSection,
        page: prePage
      };

    default:
      return state;
  }
};

export default stepReducer;
