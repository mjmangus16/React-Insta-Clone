import React, { Component } from "react";
import "./App.css";

import Container from "./components/Container/Container";
import withAuthenticate from "./components/Authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(Container);

class App extends Component {
  render() {
    return <div className="App">{<ComponentFromWithAuthenticate />}</div>;
  }
}

export default App;
