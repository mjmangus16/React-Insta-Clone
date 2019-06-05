import React, { Component } from "react";

const withAuthenticate = AppContainer => Login =>
  class extends Component {
    state = {
      auth: false,
      username: "",
      password: ""
    };

    componentDidMount() {
      if (JSON.parse(localStorage.getItem("auth", "true"))) {
        this.setState({
          auth: true
        });
      }
    }

    login = e => {
      e.preventDefault();

      if (this.state.username === "Mike" && this.state.password === "123456") {
        localStorage.setItem("auth", "true");
        this.setState({ auth: !this.state.auth });
      }
    };

    logout = () => {
      localStorage.removeItem("auth");
      this.setState({ auth: !this.state.auth });
    };

    getUsername = value => {
      this.setState({ username: value });
    };

    getPassword = value => {
      this.setState({ password: value });
    };

    render() {
      const { auth } = this.state;

      if (!auth) {
        return (
          <Login
            toggleLogin={this.login}
            getUsername={this.getUsername}
            getPassword={this.getPassword}
          />
        );
      } else {
        return <AppContainer logout={this.logout} />;
      }
    }
  };

export default withAuthenticate;
