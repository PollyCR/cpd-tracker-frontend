import React from "react";
import "./App.css";
import { routes } from "./config/routes";
import { Route } from "react-router-dom";
import { Container, Message } from "semantic-ui-react";

const notFoundMessage = () => {
  return <Message negative>NOT FOUND</Message>;
};

class App extends React.Component {
  // logOutOrError = () => {
  //   if (this.state.user && !this.state.user.errors) {
  //     return (
  //       <div id="log-out-link-container">
  //         <Link id="log-out-link" to="/logout">
  //           Logout
  //         </Link>
  //         <br />{" "}
  //       </div>
  //     );
  //   } else if (this.state.user && this.state.errors === true) {
  //     return <p>Invalid email or password. Please try again!</p>;
  //   }
  // };

  render() {
    return (
      <div className="App">
        <Container>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              component={routerProps =>
                route.component ? (
                  <route.component
                    {...routerProps}
                    login={this.login}
                    logout={this.logout}
                  />
                ) : (
                  notFoundMessage()
                )
              }
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
