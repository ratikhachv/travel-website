import React from "react";
import "./TextPhotoSideTemplate.css";
import letter from "../../../assets/D.png";

export default function TextPhotoSideTemplate(props) {
  return (
    <div className="main-left-side-div">
      <div className="firs-text-div">
        <img className="letter-img" src={letter} alt="letter" />
        <p className="first-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi.
        </p>
      </div>
      <p className="second-text">
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
        orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae
        tortor condimentum lacinia quis vel eros donec ac odio tempor orci
        dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue
        eu, consequat ac felis donec et odio pellentesque diam volutpat commodo
        sed egestas egestas fringilla fau.
      </p>
      {props.photoTitleLocation}
      <p className="third-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus
        consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi
        proin malesuada orci phasellus. Consectetur posuere iaculis amet sem.
        Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis
        urna, mi pharetra sed.
      </p>
      <p className="fourth-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie.
      </p>
      {props.twoPhotosComp}
      <p className="fifth-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
        facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh
        justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus
        consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi
        proin malesuada orci phasellus. Consectetur posuere iaculis amet sem.
        Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis
        urna, mi pharetra sed.
      </p>
    </div>
  );
}
