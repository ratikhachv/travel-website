import "./SearchbarDropdown.css";
import searchImage from "../../../../assets/search.png";
import { useState } from "react";

export default function SearchbarDropdown() {
  const [search, setSearch] = useState(false);
  const showSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <div className="icon-div" onClick={showSearch}>
        <img className="search-icon" src={searchImage} alt="Search icon" />
      </div>

      {search && (
        <div className="searchDiv">
          <input
            className="header-searchbar"
            type="text"
            placeholder="&nbsp;Search.."
          />
          <button className="header-search__btn">Search</button>
        </div>
      )}
    </>
  );
}
