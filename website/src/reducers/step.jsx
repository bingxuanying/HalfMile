import moment from "moment";

// section: "city" || "airline" || "hotel" || "activity" || "checkout" || "finished"
const initialState = {
  section: "none",
  page: 1,
  cities: [],
  days: 0,
  err: "none"
};

const city = {
  id: null,
  name: null,
  location: null,
  startDate: null,
  endDate: null
};

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ERROR_CITY":
      return {
        ...state,
        err: action.payload
      };

    case "UPDATE_CITY_DATE":
      var dayDiff = action.payload.dayDiff;

      return {
        ...state,
        cities: state.cities.map((city, idx) => {
          if (idx === action.payload.idx) {
            return {
              ...city,
              startDate: moment(action.payload.startDate),
              endDate: moment(action.payload.endDate)
            };
          } else if (idx > action.payload.idx) {
            return {
              ...city,
              startDate: moment(
                state.cities[idx].startDate.add(dayDiff, "days")
              ),
              endDate: moment(state.cities[idx].endDate.add(dayDiff, "days"))
            };
          } else {
            return city;
          }
        })
      };

    case "ADD_CITY":
      return {
        ...state,
        cities: state.cities.concat(action.payload),
        err: "none"
      };

    case "DELETE_CITY":
      var citiesAfterDelete = [...state.cities];
      citiesAfterDelete.splice(
        action.payload.itemIdx,
        action.payload.numOfDelete
      );

      var daysMoveBack = action.payload.preDate.diff(
        citiesAfterDelete[action.payload.itemIdx].startDate,
        "days"
      );

      console.log(daysMoveBack);

      citiesAfterDelete.map((city, idx) => {
        console.log(city.startDate);
        if (idx >= action.payload.itemIdx) {
          return {
            ...city,
            startDate: moment(city.startDate.add(daysMoveBack, "days")),
            endDate: moment(city.endDate.add(daysMoveBack, "days"))
          };
        } else {
          return city;
        }
      });

      return {
        ...state,
        cities: citiesAfterDelete
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
