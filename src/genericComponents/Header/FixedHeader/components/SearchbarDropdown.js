import "./SearchbarDropdown.css";
import searchImage from "../photos/search.png";
import { useState } from "react";
export default function SearchbarDropdown() {
  const [search, setSearch] = useState(false);
  const showSearch = () => {
    setSearch(!search);
  };

  return (
    <div class="main">
      <div className="icon-div" onClick={showSearch}>
        <img src={searchImage} alt="Search icon" />
      </div>

      {search && (
        <div className="searchDiv">
          <input type="text" placeholder="&nbsp;Search.." />
          <button>Search</button>
        </div>
      )}
    </div>
  );
}
