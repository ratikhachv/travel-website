import React from "react";
import "./AboutWebsiteTemplate.css";
import image from "../../../assets/photooooo.png";

export default function AboutWebsiteTemplate() {
  return (
    <>
      <div className="container">
        <div className="leftContainer">
          <h2 className="about-web-title">About Travel Website</h2>
          <p className="about-web-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum
            et in feugiat. Platea in diam, est congue. Posuere sapien morbi
            augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus
            nibh. Egestas semper massa viverra massa proin in morbi placerat.
            Pharetra nec, est non integer nisi, ut faucibus. Non, in nam
            sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit
            pellentesque id cras lobortis tortor, blandit.
          </p>
          <p className="about-web-text">
            Id ac non, semper turpis maecenas. Convallis tempor fringilla
            quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
            Malesuada velit, at mattis adipiscing quisque tristique id magna.
            Blandit porta sit nam magna sit. Turpis vestibulum facilisis
            placerat habitant gravida eget. Lacus pretium, arcu non adipiscing
            sed faucibus semper eget tempor.
          </p>
        </div>
        <div className="rightContainer">
          <img className="about-web-photo" src={image} alt="x"></img>
        </div>
      </div>
    </>
  );
}
