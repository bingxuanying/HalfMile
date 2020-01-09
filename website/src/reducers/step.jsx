// section: "city" || "airline" || "hotel" || "activity" || "checkout" || "finished"
const initialState = {
  section: "none",
  page: 1,
  totalCities: null,
  totalDays: null
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CITYnDAY":
      return {
        ...state,
        totalCities: state.totalCities + 1,
        totalDays: state.totalDays + action.payload
      };

    case "DELETE_CITYnDAY":
      return {
        ...state,
        totalCities: state.totalCities - 1,
        totalDays: state.totalDays - action.payload
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
        nextSection = "airline";
        nextPage = 1;
      } else if (state.section === "airline") {
        nextSection = state.page + 1 > state.totalCities ? "hotel" : "airline";
        nextPage = state.page + 1 > state.totalCities ? 1 : state.page + 1;
      } else if (state.section === "hotel") {
        nextSection = state.page + 1 > state.totalCities ? "activity" : "hotel";
        nextPage = state.page + 1 > state.totalCities ? 1 : state.page + 1;
      } else if (state.section === "activity") {
        nextSection =
          state.page + 1 > state.totalDays ? "checkout" : "activity";
        nextPage = state.page + 1 > state.totalDays ? 1 : state.page + 1;
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
        prePage = state.page - 1 < 1 ? state.totalCities : state.page - 1;
      } else if (state.section === "activity") {
        preSection = state.page - 1 < 1 ? "hotel" : "activity";
        prePage = state.page - 1 < 1 ? state.totalCities : state.page - 1;
      } else if (state.section === "checkout") {
        preSection = "activity";
        prePage = state.totalDays;
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
