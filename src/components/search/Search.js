import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ImageSearch,
  InputSearch,
  SearchContainer,
  SearchContent,
  SearchWrap,
  Title,
} from "./SearchStyled";

Search.propTypes = {};

function Search(props) {
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <SearchWrap>
      <SearchContainer>
        <Title>User management</Title>

        <SearchContent>
          <img src="/assets/search_icon.svg" alt={`images search`} />
          <input
            onChange={handleInput}
            value={searchVal}
            type="text"
            name="product-search"
            placeholder="Search..."
          />
        </SearchContent>
      </SearchContainer>
    </SearchWrap>
  );
}

export default Search;
