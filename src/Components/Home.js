import React, { Component } from "react";
import API from "../adapters/API";

export class Home extends Component {
  componentDidMount = () => {
    API.validateUser().then(user => {
      this.setState({ user });
      // console.log(user)
      if (user && user.errors) {
        this.props.history.push("/welcome");
      }
    });
  };
  render() {
    return <div>Hello you've hit the home page</div>;
  }
}

export default Home;
