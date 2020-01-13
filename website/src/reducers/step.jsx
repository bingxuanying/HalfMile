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
    case "ADD_CITY":
      for (let i = 0; i < state.cities.length; i++) {
        if (action.payload.name === state.cities[i].name) {
          return {
            ...state,
            err: "repeat city"
          };
        }
      }

      return {
        ...state,
        cities: state.cities.concat(action.payload)
      };

    case "DELETE_CITY":
      var newCities = state.cities.filter(city => city.id !== action.payload);

      return {
        ...state,
        cities: newCities
      };

    case "REORDER_CITY":
      var result = state.cities;
      var [removed] = result.splice(action.payload.startIndex, 1);
      result.splice(action.payload.endIndex, 0, removed);

      return {
        ...state,
        cities: result
      };

    case "CHANGE_SECTION_NONE2CITY":
      return {
        ...state,
        section: "city",
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
