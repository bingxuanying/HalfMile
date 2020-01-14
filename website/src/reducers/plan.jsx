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
    case "ADD_CITY":
      let lastIdx = state.length - 1;
      let lastCityName =
        lastIdx === 0 ? state[lastIdx].home.name : state[lastIdx].city.name;
      if (lastIdx >= 0 && action.payload.name === lastCityName) {
        return {
          ...state
        };
      }

      let newCity = Object.assign(
        {},
        initCity,
        { name: action.payload.name },
        { location: action.payload.location }
      );

      let newDay = Object.assign({}, initDay, { city: newCity });

      // let newState = state.concat(newDay);

      return state.concat(newDay);

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
