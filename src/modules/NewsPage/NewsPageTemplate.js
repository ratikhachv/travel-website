import "./../NewsPage/NewsPageTemplate.css";
import React from "react";

export default function NewsPageTemplate(props) {
  return (
    <div className="main-div">
      <div className="title-nav-div">
        <h1 className="title">Travel WebSite Articles</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <div className="nav-div">
          <ul>
            {/* <li>{props.navComp}bbbbbbb</li>
            <li>{props.navComp}bbbbbb</li>
            <li>{props.navComp}bbbb</li>
            <li>{props.navComp}bbbbbbbb</li>
            <li>{props.navComp}bbbbb</li> */}
          </ul>
        </div>
      </div>
      <section className="card-section">
        {/* <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div>
        <div className="card">{props.cardComp}</div> */}
      </section>
    </div>
  );
}
