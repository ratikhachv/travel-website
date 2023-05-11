import "../HomePage/HomePageTemplate.css";
import React from "react";
export default function HomePageTemplate(props) {
  return (
    <div className="home-page">
      {props.welcomeSection}
      {props.whyGeorgia}
      {props.topDestination}
      {props.testimonial}
    </div>
  );
}
