import React from "react";
import "../../../modules/HomePage/Testimonial/TestimonialTemplate.css";
export default function TestimonialTemplate(props) {
  return (
    <div className="testimonial-div">
      <span className="section-name">Testimonial</span>
      <h1 className="testimonial-title">What they say about us</h1>
      <div className="testimonial-cards-div">
        {props.review1}
        {props.review2}
        {props.review3}
        {props.review4}
        {props.review5}
        {props.review6}
      </div>
    </div>
  );
}
