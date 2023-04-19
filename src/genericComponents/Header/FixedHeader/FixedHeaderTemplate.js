import React from "react";
import './FixedHeader.css'

function FixedHeaderTemplate(props) {
  return (
    <div className="fixed-header">
      <p className="logo">Travel Website</p>
      {props.navigation}
      <div className="buttons">
        {props.languageBtn}
        {props.searchIcon}
      </div>
    </div>
  );
}

export default FixedHeaderTemplate;
