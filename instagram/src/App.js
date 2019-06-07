import React, { Component } from "react";
import "./App.css";

import Login from "./components/Login/Login";
import AppContainer from "./components/AppContainer/AppContainer";
import withAuthenticate from "./components/Authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(AppContainer)(Login);

class App extends Component {
  render() {
    return <div className="App">{<ComponentFromWithAuthenticate />}</div>;
  }
}

export default App;
