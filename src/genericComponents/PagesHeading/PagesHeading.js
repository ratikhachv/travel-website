import "../../genericComponents/PagesHeading/PagesHeading.css";
import image from "../../assets/image.jpg";
export default function PagesHeading(props) {
  return (
    <div className="main-div">
      <img className="heading-image" src={image} alt="heading img" />
      <h1 className="heading-title">{props.title}heading title</h1>
    </div>
  );
}
