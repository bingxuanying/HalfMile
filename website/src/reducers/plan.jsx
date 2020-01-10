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

const newState = {
  city: [],
  hotel: [],
  transportation: [],
  endDate: null,
  isEdit: false,
  isFinished: false
};

const newCity = {
  name: null,
  location: {
    lat: null,
    lng: null
  },
  activities: []
};

const newHotel = {
  name: null,
  price: null,
  roomType: null,
  location: {
    lat: null,
    lng: null
  }
};

const newTransportation = {
  flightNum: null,
  departureCity: null,
  arrivalCity: null,
  departureDate: null,
  arrivalDate: null
};

const planReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case "CREATE_NEW":
      return null;
    default:
      return state;
  }
};

export default planReducer;
