import "../HomePage/HomePageTemplate.css";
import React from "react";

export default function HomePageTemplate(props) {
  return (
    <div className="home-page">
      <div className="welcome-georgia">{props.welcomeGeorgia}</div>
      <div className="why-georgia">{props.whyGeorgia}</div>
      <div className="top-destination">{props.topDestination}</div>
      <div className="testimonial">{props.testimonial}</div>
    </div>
  );
}
