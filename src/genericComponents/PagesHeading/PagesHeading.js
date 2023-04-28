import "../../genericComponents/PagesHeading/PagesHeading.css";
import image from "../../assets/image.jpg";
export default function PagesHeading(props) {
  return (
    <div className="main-div">
      <img className="heading-img" src={image} alt="heading image" />
      <h1 className="title">{props.title}title</h1>
    </div>
  );
}
