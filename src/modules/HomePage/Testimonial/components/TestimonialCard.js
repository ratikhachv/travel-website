import "./TestimonialCard.css";
import icon from "../../../../assets/804948.png";
export default function TestimonialCard(props) {
  return (
    <div className="reviews-card">
      <div className="photo-name-div">
        <img className="reviews-photo" src={icon} alt="img" />
        <h1 className="reviews-name">{props.name}name-female</h1>
      </div>
      <p className="positive-text">
        {props.reviews}Lorem ipsum dolor sit amet, consectetur adipiscing elit
        ut aliquam, purus sit amet luctus venenatis
      </p>
    </div>
  );
}
