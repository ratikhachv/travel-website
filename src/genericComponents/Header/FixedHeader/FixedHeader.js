import React from "react";
import HeaderNav from "./components/HeaderNav";
import FixedHeaderTemplate from "./FixedHeaderTemplate";
import SearchbarDropdown from "./components/SearchbarDropdown";
import LanguageDropdown from "./components/LanguageDropdown";

function FixedHeader() {
  return (
    <FixedHeaderTemplate
      navigation={<HeaderNav />}
      languageBtn={<LanguageDropdown />}
      searchIcon={<SearchbarDropdown />}
    />
  );
}

export default FixedHeader;
