import React, { Component} from "react";
import HomePage from "./component/Pages/HomePage";
import ServicePage2 from "./component/Pages/ServicePage2";
import ServicePage1 from "./component/Pages/ServicePage1";
import "bootstrap/dist/css/bootstrap.min.css";
import Calendar from "./component/Calender/Calender";
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
      <div>
        {/* <h1>Counter {this.props.counter}</h1>
        <p>
          <button onClick={() => this.props.increment()}> + </button>
          <button onClick={() => this.props.decrement()}> - </button>
        </p> */}
        {/* <HomePage /> */}
        <ServicePage1 />
        {/* <ServicePage2 /> */}
        {/* <Calendar /> */}
      </div>
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
