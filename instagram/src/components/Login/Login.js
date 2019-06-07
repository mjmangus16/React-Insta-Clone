import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  height: 500px;
  margin: 100px auto;
  border: solid lightGrey 1px;
`;

const Form = styled.form`
  width: 100%;
  height: 50%;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 50%;
  margin: 15px auto;
`;

class Login extends Component {
  render() {
    const { toggleLogin, getUsername, getPassword } = this.props;
    return (
      <Container>
        <Form>
          <Input
            type="text"
            placeholder="Username"
            onChange={e => getUsername(e.target.value)}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            onChange={e => getPassword(e.target.value)}
          />
          <br />
          <button onClick={e => toggleLogin(e)}>Login</button>
        </Form>
      </Container>
    );
  }
}

export default Login;
