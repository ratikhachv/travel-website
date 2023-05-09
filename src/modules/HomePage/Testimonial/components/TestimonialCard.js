import "./TestimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <>
      <div className="reviewscard">
        <div className="reviewsphotoandname">
          <img className="reviewsphoto" src={props.image} alt="" />
          <h1 className="reviewsname">{props.name}</h1>
        </div>
        <p className="positivereviews">{props.reviews}</p>
      </div>
    </>
  );
}
