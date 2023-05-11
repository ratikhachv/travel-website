import "./TestimonialCard.css";
import icon from "../../../../assets/804948.png";
export default function TestimonialCard(props) {
  return (
    <>
      <div className="reviewscard">
        <div className="reviewsphotoandname">
          <img className="reviewsphoto" src={icon} alt="img" />
          <h1 className="reviewsname">{props.name}</h1>
        </div>
        <p className="positivereviews">{props.reviews}</p>
      </div>
    </>
  );
}
