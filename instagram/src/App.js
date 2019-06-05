import React, { Component } from "react";
import "./App.css";

import data from "./data/dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: [...data] });
  }

  render() {
    const { posts } = this.state;

    let content;

    if (data.length > 0) {
      content = posts.map((item, i) => (
        <PostContainer data={item} key={`post-${i}`} />
      ));
    }

    return (
      <div className="App">
        <SearchBar />
        {content}
      </div>
    );
  }
}

export default App;
