import React, { Component } from "react";
import "./CheckoutPage.sass";
import { Button } from "@material-ui/core";
import FooterContainer from "../Footer/FooterContainer";

// ------------------------- State ------------------------- //
// Trip{
//  TripTitle, Date, Home,
//  Days[{
//    City{location,name ...}
//    Transport[{flightNumber,arriveTime/departTime,Date,price
//               flightCompany,duration,arriveAirport/departAirport}]
//    Hotel{name,img,location,address,rate,info,price}
//    Activity[{name,image,location,rate,price,costTime},{}]
//   ]
//  }
// --------------------------------------------------------- //
class CheckoutPage extends Component {
  render() {
    return (
      <div className="checkout-page">
        <div className="checkout-page-content">
          <div className="checkout-page-title">
            <div className="checkout-page-title-name">Title Name</div>
            <div className="checkout-page-title-option">Edit Icon</div>
          </div>
          <div className="checkout-page-overviews">Cities Overviews</div>
          <div className="checkout-page-checkout">
            <div className="checkout-page-checkout-est">Totol Est $10000</div>
            <div className="checkout-page-checkout-btn">
              <Button>Checkout</Button>
            </div>
          </div>
        </div>
        <div className="footer">
          <FooterContainer />
        </div>
      </div>
    );
  }
}

const fakeTrip = {
  tripTitle: "One day in SF",
  startDate: "12/1",
  endDate: "12/2",
  home: "Davis",
  days: [
    {
      city: { location: { lat: 199, longt: 100 }, name: "San Franscisco" },
      transport: [
        {
          flightNumber: "UA8888",
          arriveTime: "14:00",
          departTime: "13:00",
          Date: "12/1",
          price: "188",
          flightCompany: "united airline",
          duration: "1h0m",
          arriveAirport: "SFO",
          departAirport: "SMF"
        }
      ],
      hotel: {
        name: "JW Marroit SF",
        img:
          "https://q-cf.bstatic.com/images/hotel/max1024x768/187/18727539.jpg",
        location: { lat: 1, longt: 2 },
        address: "San Francisco UnionSquare",
        rate: 5,
        info: "Luxary Hotel",
        price: 579
      },
      Activity: [
        {
          name: "Fisher Mart",
          img:
            "https://upload.wikimedia.org/wikipedia/commons/a/ae/Fishermans_Wharf_Sign%2C_SF%2C_CA%2C_jjron_25.03.2012.jpg",
          location: { lat: 1, long: 2 },
          address: "1st, San Franscico, CA ,95618",
          rate: 4.5,
          price: 100,
          costTime: "2h"
        }
      ]
    }
  ]
};

export default CheckoutPage;
