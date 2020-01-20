import React, { useState, useEffect } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { useFormFields } from "../libs/hooksLib";
import API from "../adapters/API";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [fields, handleFieldChange] = useFormFields({
    display_name: "",
    email: "",
    password: ""
  });

  useEffect(() => {
    function handleDetailsChange(key, value) {
      setDetails({
        [key]: value
      });
    }
  });

  this.submit = e => {
    e.preventDefault();
    API.signup({
      display_name: this.state.display_name,
      email_address: this.state.email_address,
      password: this.state.password
    }).then(user => this.props.login(user));
  };
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign up to CPD Tracker
        </Header>
        <Form
          size="large"
          onSubmit={() => this.submit()}
          onChange={e => handleDetailsChange(e.target.name, e.target.value)}
        >
          <Segment stacked>
            <Form.Input
              name="display_name"
              type="display_name"
              placeholder="please enter your name here!"
              autoComplete="name"
              value={this.state.display_name}
            />
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
              value={this.state.email_address}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={this.state.password}
            />

            <Button color="teal" fluid size="large">
              Sign up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
export default SignupForm;
