import "../../Footer/components/FooterColumns.css";
export default function FooterColumns(props) {
  return (
    <div className="footer-column-div">
      <h1>{props.columnTitle}</h1>
      <div className="column-components">
        <ul>
          <li>{props.component1}component</li>
          <li>{props.component2}component</li>
          <li>{props.component3}component</li>
          <li>{props.component4}component</li>
          <li>{props.component5}component</li>
        </ul>
      </div>
    </div>
  );
}
