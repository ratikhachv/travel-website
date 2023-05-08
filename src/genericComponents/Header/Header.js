import React from "react";
import FixedHeader from "./FixedHeader/FixedHeader";
import StaticHeader from "./staticHeader/StaticHeader";

function Header() {
  return (
    <header>
      <StaticHeader />
      <FixedHeader />
    </header>
  );
}

export default Header;
