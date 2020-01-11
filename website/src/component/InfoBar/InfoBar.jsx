import React, { Component } from "react";
import "./index.sass";
import { Snackbar, IconButton, Fade } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
// --------------- Usage ------------- //
// {this.state.infoBarShow && (        //
//   <InfoBar                          //
//     open={this.state.infoBarShow}   //
//     onClose={this.closeInfoBar}     //
//     autoHideDuration={1500}         //
//     message="U got some Shit"       //
//     type="success"                  //
//   />                                //
// )}                                  //
//                                     //
// use infoBarShow to open InfoBar.    //
// use closeInfoBar to make infoBarShow//
// false.                              //
// --------------- Usage ------------- //

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class InfoBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      autoHideDuration: this.props.autoHideDuration,
      message: this.props.message,
      type: this.props.type
    };
  }

  render() {
    this.getDefault();
    var name;
    switch (this.state.type) {
      case "success":
        name = "alret-bar-success";
        break;
      case "info":
        name = "alret-bar-info";
        break;
      case "warning":
        name = "alret-bar-warning";
        break;
      case "error":
        name = "alret-bar-error";
        break;
      default:
        break;
    }
    return (
      <Snackbar
        open={this.state.open}
        autoHideDuration={this.state.autoHideDuration}
        onClose={this.handleClose}
        // anchorOrigin={{ vertical: "left", horizontal: "bottom" }}
        TransitionComponent={Fade}
      >
        <Alert
          className={name}
          severity={this.state.type}
          action={
            <IconButton color="inherit" size="small" onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          }
        >
          {this.state.message}
        </Alert>
      </Snackbar>
    );
  }

  handleClose = () => {
    this.setState({ open: false });
    // send close signal to parent with certain delay
    setTimeout(() => {
      this.props.onClose();
    }, 500);
  };
  getDefault = () => {
    if (
      this.state.type != "success" &&
      this.state.type != "info" &&
      this.state.type != "warning" &&
      this.state.type != "error"
    ) {
      console.error("Wrong Type to InfoBar");
      this.setState({ type: "info" });
    }
    if (!this.state.message) this.setState({ message: "Default Message" });
    if (!this.state.autoHideDuration) this.setState({ autoHideDuration: 2000 });
  };
}

export default InfoBar;
