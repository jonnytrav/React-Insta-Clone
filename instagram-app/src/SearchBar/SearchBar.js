import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div onChange={props.handleSearchInput}>
      <form onChange={props.handleFilter}>
        <input type="text" placeholder="Search the gram..." />
      </form>
    </div>
  );
};

export default SearchBar;
