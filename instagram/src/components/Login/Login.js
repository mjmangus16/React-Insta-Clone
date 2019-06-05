import React, { Component } from "react";

const styles = {
  container: {
    width: 500,
    height: 500,
    margin: "100px auto",
    border: "solid lightGrey 1px"
  },
  form: {
    width: "100%",
    height: "50%",
    marginTop: 100
  },
  input: {
    width: "50%",
    margin: "15px auto"
  }
};

class Login extends Component {
  render() {
    const { toggleLogin, getUsername, getPassword } = this.props;
    return (
      <div style={styles.container}>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            onChange={e => getUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={e => getPassword(e.target.value)}
          />
          <br />
          <button onClick={e => toggleLogin(e)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
