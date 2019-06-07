import React, { Component } from "react";

import data from "../../data/dummy-data";

import SearchBar from "./SearchBar/SearchBar";
import PostContainer from "./PostContainer/PostContainer";

class AppContainer extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: [...data] });
  }

  searchPosts = e => {
    this.setState({
      posts: data.filter(post => post.username.includes(e.target.value))
    });
  };

  render() {
    const { posts } = this.state;
    const { logout, username } = this.props;

    return (
      <div className="App">
        <SearchBar search={this.searchPosts} logout={logout} />
        {posts.map((post, i) => (
          <PostContainer data={post} key={`post-${i}`} username={username} />
        ))}
      </div>
    );
  }
}

export default AppContainer;
