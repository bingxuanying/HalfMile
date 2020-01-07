import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderContainer from "./component/Header/HeaderContainer";
import HomePage from "./component/Pages/HomePage";
import ServicePage1 from "./component/Pages/ServicePage1";
import ServicePage2 from "./component/Pages/ServicePage2";
import Calendar from "./component/Calender/Calender";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// import { connect } from "react-redux";
// import * as CounterActions from "./actions/counterActions";

// @connect(store => {
//   return {
//     user: store.user
//   };
// })

class App extends Component {
  render() {
    // const { counter } = this.props;
    // console.log(counter);
    return (
      <Router>
        <div>
          <HeaderContainer />

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/help">
              <ServicePage1 />
            </Route>
            <Route path="/plan">
              <ServicePage2 />
            </Route>
          </Switch>

          {/* <Calendar /> */}

          {/* <h1>Counter {this.props.counter}</h1>
        <p>
          <button onClick={() => this.props.increment()}> + </button>
          <button onClick={() => this.props.decrement()}> - </button>
        </p> */}
        </div>
      </Router>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = () => {
//   return {
//     increment: CounterActions.increment,
//     decrement: CounterActions.decrement
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps())(App);
export default App;
