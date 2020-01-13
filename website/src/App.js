import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderContainer from "./component/Header/HeaderContainer";
import HomePage from "./component/Pages/HomePage";
import PlanPage_Part1 from "./component/Pages/PlanPage_Part1";
import PlanPage_Part2 from "./component/Pages/PlanPage_Part2";
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
              <PlanPage_Part1 />
            </Route>
            <Route path="/plan">
              <PlanPage_Part1 />
            </Route>
            <Route path="/profile">
              <PlanPage_Part2 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
