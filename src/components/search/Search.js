import React, { useContext } from "react";
import { AppContext } from "../../Context/AppProvider";
import {
  SearchContainer,
  SearchContent,
  SearchWrap,
  Title
} from "./SearchStyled";

Search.propTypes = {};

function Search() {
  const { searchText, setSearchText } = useContext(AppContext);

  const handleInput = (e) => {
    setSearchText(e?.target?.value);
  };

  return (
    <SearchWrap>
      <SearchContainer>
        <Title>User management</Title>

        <SearchContent>
          <img src="/assets/search_icon.svg" alt={`images search`} />
          <input
            onChange={handleInput}
            value={searchText}
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
