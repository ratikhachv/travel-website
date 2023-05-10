import teamImg from "../../../../assets/team-img.png";
import "./TeamCardComp.css";
export default function TeamCardComp(props) {
  return (
    <div className="team-card">
      <img className="person-image" src={teamImg} alt="team-img" />
      <p className="person-name">{props.name}vigaca vigacadze</p>
      <p className="person-profesion">{props.profesion}ragacisti</p>
    </div>
  );
}
