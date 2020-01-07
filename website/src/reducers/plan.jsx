const initialState = [
  {
    startDate: null,
    home: {
      name: null,
      location: {
        lat: null,
        lng: null
      }
    }
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
    case "INIT":
      return {
        ...state,
        startDate: action.payload.startDate,
        home: action.payload.home
      };
    case "CREATE_NEW":
      return null;
    default:
      return state;
  }
};

export default planReducer;
