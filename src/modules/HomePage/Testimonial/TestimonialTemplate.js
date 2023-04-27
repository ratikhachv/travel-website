import React from "react";
import "../../../modules/HomePage/Testimonial/TestimonialTemplate.css";
export default function TestimonialTemplate(props) {
  return (
    <div className="testimonial-div">
      <span className="section-name">Testimonial</span>
      <h1 className="testimonial-title">What they say about us</h1>
      <div className="testimonial-cards-divUp">
        <div className="testimonial-card">{props.review1}</div>
        <div className="testimonial-card">{props.review2}</div>
        <div className="testimonial-card">{props.review3}</div>
      </div>
      <div className="testimonial-cards-divDown">
        <div className="testimonial-card">{props.review4}</div>
        <div className="testimonial-card">{props.review5}</div>
        <div className="testimonial-card">{props.review6}</div>
      </div>
    </div>
  );
}
