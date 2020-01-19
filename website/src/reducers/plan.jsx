import moment from "moment";

const initialState = [
  {
    startDate: null,
    endDate: null,
    home: {
      name: null,
      location: {
        lat: null,
        lng: null
      }
    },
    guest: {
      adults: 1,
      children: 0,
      infants: 0
    },
    error: null
  }
];

const initDay = {
  city: [], // one single item for now
  hotel: [], // one single item for now
  transportation: [],
  endDate: null,
  isEdit: false,
  isFinished: false
};

const initCity = {
  name: null,
  location: {
    lat: null,
    lng: null
  },
  activities: []
};

const initHotel = {
  name: null,
  price: null,
  roomType: null,
  location: {
    lat: null,
    lng: null
  }
};

const initTransportation = {
  flightNum: null,
  departureCity: null,
  arrivalCity: null,
  departureDate: null,
  arrivalDate: null
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
    // City Page
    case "UPDATE_CITY_DATE":
      var initStartDate4update = state[0].startDate;
      var curStartDate4update = action.payload.startDate;

      var position4update =
        curStartDate4update.diff(initStartDate4update, "days") + 1;
      var dayDiff = action.payload.dayDiff;
      var clonedday = Object.assign({}, state[position4update]);

      var newState_CityDate = [...state];

      for (let i = 0; i < Math.abs(dayDiff); i++) {
        if (dayDiff > 0) {
          newState_CityDate.splice(position4update, 0, clonedday);
        } else if (dayDiff < 0) {
          newState_CityDate.splice(position4update, 1);
        }
      }

      return newState_CityDate;

    case "ADD_CITY":
      // Prevent ERR
      var preIdx = state.length - 1;
      var preCityName =
        preIdx === 0 ? state[preIdx].home.name : state[preIdx].city.name;
      if (preIdx >= 0 && action.payload.name === preCityName) {
        return { ...state };
      }

      var newCity = Object.assign(
        {},
        initCity,
        { name: action.payload.name },
        { location: action.payload.location }
      );

      var newDay = Object.assign({}, initDay, { city: newCity });

      // let newState = state.concat(newDay);

      return state.concat(newDay);

    case "DELETE_CITY":
      var initStartDate4delete = state[0].startDate;
      var newState_delete = [...state];

      action.payload.dateLst.forEach(date => {
        var curStartDate4delete = date.startDate;
        var position4delete =
          curStartDate4delete.diff(initStartDate4delete, "days") + 1;
        var range4delete = date.endDate.diff(curStartDate4delete, "days");

        newState_delete.splice(position4delete, range4delete);
      });

      return newState_delete;

    case "REORDER_CITY":
      return action.payload.sortedPlanLst;

    // Start Box
    case "CHANGE_HOME_ADDRESS":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          return {
            ...state[0],
            home: action.payload
          };
        }
        // Leave every other item unchanged
        return item;
      });
    case "CHANGE_START_DATE":
      return {
        ...state,
        startDate: action.payload
      };
    case "CHANGE_END_DATE":
      return {
        ...state,
        endDate: action.payload
      };
    case "GUEST_INCREAMENT":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          var guestType = action.payload;
          return {
            ...state[0],
            guest: {
              ...state[0].guest,
              [guestType]: state[0].guest[guestType] + 1
            }
          };
        }
        // Leave every other item unchanged
        return item;
      });
    case "GUEST_DECREMENT":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          var guestType = action.payload;
          return {
            ...state[0],
            guest: {
              ...state[0].guest,
              [guestType]: state[0].guest[guestType] - 1
            }
          };
        }
        // Leave every other item unchanged
        return item;
      });
    case "GUEST_CLEAR":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          return {
            ...state[0],
            guest: {
              ...state[0].guest,
              adults: 1,
              children: 0,
              infants: 0
            }
          };
        }
        // Leave every other item unchanged
        return item;
      });
    case "UPDATE_ERROR_INIT":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          return {
            ...state[0],
            error: action.payload
          };
        }
        // Leave every other item unchanged
        return item;
      });
    case "CHANGE_SECTION_NONE2CITY":
      return state.map((item, index) => {
        // Replace the item at index 0
        if (index === 0) {
          return {
            ...state[0],
            error: "none"
          };
        }
        // Leave every other item unchanged
        return item;
      });
    default:
      return state;
  }
};

export default planReducer;
