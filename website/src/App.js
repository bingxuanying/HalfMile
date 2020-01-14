import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HeaderContainer from "./component/Header/HeaderContainer";
import HomePage from "./component/Pages/HomePage";
import ProfilePage from "./component/Pages/ProfilePage";
import PlanPage from "./component/Pages/PlanPage";
import PlanPage_Part1 from "./component/Pages/PlanPage_Part1";
import PlanPage_Part2 from "./component/Pages/PlanPage_Part2";
import CheckoutPage from "./component/Pages/CheckoutPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";

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
              {/* <PlanPage_Part2 /> */}
              <CheckoutPage />
            </Route>
            <Route path="/plan">
              {this.props.section === "none" ? (
                <Redirect to="/" />
              ) : (
                <PlanPage />
              )}
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    section: state.step.section
  };
};

export default connect(mapStateToProps)(App);
