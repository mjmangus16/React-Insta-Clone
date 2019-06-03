import React from "react";
import "./App.css";
import data from "./data/dummy-data";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";

const App = () => {
  console.log(data);

  let content;

  if (data.length > 0) {
    content = data.map((item, i) => (
      <PostContainer data={item} key={`post-${i}`} />
    ));
  }

  return (
    <div className="App">
      <SearchBar />
      {content}
    </div>
  );
};

export default App;
