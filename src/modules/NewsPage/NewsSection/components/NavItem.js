import "./NavItem.css";
import React from "react";
import { useState } from "react";

export default function NavItem(props) {
  const [isColor, setIsColor] = useState(false);
  const [clickedMode, setClickedMode] = useState(false);

  const changeColor = {
    backgroundColor: isColor ? "#43B97F" : "",
    color: isColor ? "white" : "",
  };

  function toggleColorMode() {
    setIsColor(!isColor);
    setClickedMode(!clickedMode);
  }
  return (
    <>
      <li
        className="news-page-li"
        onClick={toggleColorMode}
        style={changeColor}
      >
        {props.navItem}bbbbbbb
      </li>
    </>
  );
}
