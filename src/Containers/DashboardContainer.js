import React, { Component } from "react";

export class DashboardContainer extends Component {
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
    return <div>Hello</div>;
  }
}

export default DashboardContainer;
