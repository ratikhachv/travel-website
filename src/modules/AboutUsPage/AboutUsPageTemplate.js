import "./AboutUsPageTemplate.css";
export default function AboutUsPageTemplate(props) {
  return (
    <>
      {props.pagesHeading}
      <main className="about-us-page">
        {props.whyChooseUs}
        {props.aboutWebsite}
        {props.ourTeam}
      </main>
    </>
  );
}
