import "../../../modules/HomePage/WelcomeSection/WelcomeSectionTemplate.css";
import video from "../../../assets/video1.mp4";
export default function WelcomeSectionTemplate() {
  return (
    <div className="section-main-div">
      <video autoPlay muted loop>
        <source className="background-video" src={video} type="video/mp4" />
      </video>
      <div className="section-text-div">
        <h1 className="section-title">Explore the Georgia with a smile</h1>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo
        </p>
        <div className="search-div">tour search</div>
      </div>
    </div>
  );
}
