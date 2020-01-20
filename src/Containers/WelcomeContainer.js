import React, { Component } from "react";
import { Button } from "semantic-ui-react";

export class WelcomeContainer extends Component {
  render() {
    return (
      <>
        Welcome to CPD Tracker!
        <Button onClick={() => this.props.history.push("/login")}>Login</Button>
        <Button onClick={() => this.props.history.push("/signup")}>
          Sign up
        </Button>
      </>
    );
  }
}

export default WelcomeContainer;
