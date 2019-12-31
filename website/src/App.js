import React, { Component } from "react";
import HomePage from "./component/HomePage";
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
    const { counter } = this.props;
    // console.log(counter);
    return (
      <div>
        {/* <h1>Counter {this.props.counter}</h1>
        <p>
          <button onClick={() => this.props.increment()}> + </button>
          <button onClick={() => this.props.decrement()}> - </button>
        </p> */}
        <HomePage />
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
