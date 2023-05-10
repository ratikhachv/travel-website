import "./OurTeamTemplate.css";
export default function OurTeamTemplate(props) {
  return (
    <section className="our-team-sect">
      <h1 className="sect-title">Our Teams</h1>
      <p className="team-sect-text">Lorem ipsum dolor sit amet</p>
      <div className="cards-div">
        {props.teamCard}
        {props.teamCard}
        {props.teamCard}
        {props.teamCard}
        {props.teamCard}
      </div>
    </section>
  );
}
