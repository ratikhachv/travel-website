import img from "../../../../assets/card.jpg";
import "../components/TopDestinationCard.css";
import arrow from "../../../../assets/Vector.png";
export default function TopDestinationCard(props) {
  return (
    <div className="top-destination-card">
      <img className="top-destination-img" src={props.img} alt="tourImage" />
      <h1 className="tour-title">{props.title}</h1>
      <div className="tour-info">
        <p className="tour-price">{props.price}</p>
        <div className="tour-date-div">
          <img className="arrow" src={arrow} alt="arrowImage" />
          <p className="tour-date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
