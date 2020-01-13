import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderContainer from "./component/Header/HeaderContainer";
import HomePage from "./component/Pages/HomePage";
import ServicePage1 from "./component/Pages/ServicePage1";
import ServicePage2 from "./component/Pages/ServicePage2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Calendar from "./component/Calender/Calender";

// import { connect } from "react-redux";
// import * as CounterActions from "./actions/counterActions";

// @connect(store => {
//   return {
//     user: store.user
//   };
// })

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          {/* <SearchBarLoca /> */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/help">
              <ServicePage1 />
            </Route>
            <Route path="/plan">
              <ServicePage1 />
            </Route>
            <Route path="/profile">
              <ServicePage2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
