import "../../Footer/components/FooterLinksColumn.css";
export default function FooterLinksColumn(props) {
  return (
    <div className="footer-links-div">
      <h1>{props.links}</h1>
      <div className="links-components">
        <ul>
          <li>{props.discover}</li>
          <li>{props.specialDeals}</li>
          <li>{props.tours}</li>
          <li>{props.community}</li>
          <li>{props.aboutUs}</li>
        </ul>
      </div>
    </div>
  );
}
