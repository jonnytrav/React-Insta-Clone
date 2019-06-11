import React from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import PostsContainer from "./PostsContainer/PostsContainer";
import dummyData from "./dummyData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      filteredPosts: [],
      searchInput: ""
    };
  }
  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }
  handleSearchInput = e => {
    e.preventDefault();
    this.setState({ searchInput: e.target.value });
  };
  handleFilter = e => {
    // this.setState({ searchInput: e.target.value });
    // console.log(this.state.searchInput);
    let filtered = this.state.dummyData.filter(post => {
      if (post.username.includes(this.state.searchInput)) {
        return post;
      }
    });
    this.setState({ filteredPosts: filtered });
  };

  render() {
    return (
      <div className="app">
        <SearchBar
          handleFilter={this.handleFilter}
          handleSearchInput={this.handleSearchInput}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts > 0
              ? this.state.filteredPosts
              : this.state.dummyData
          }
        />
      </div>
    );
  }
}

export default App;
