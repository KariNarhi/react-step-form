import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" showMenuIconButton={false} />
          <h1>Submit succesful</h1>
          <p>You will get an email with confirmation and further instuctions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
