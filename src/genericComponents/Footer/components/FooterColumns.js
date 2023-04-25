import "../../Footer/components/FooterColumns.css";
export default function FooterColumns(props) {
  return (
    <div className="footer-column-div">
      <h1>{props.columnTitle}</h1>
      <div className="column-components">
        <ul>
          <li>{props.component1}ვიზუალის ნიმუში</li>
          <li>{props.component2}ვიზუალის ნიმუში</li>
          <li>{props.component3}ვიზუალის ნიმუში</li>
          <li>{props.component4}ვიზუალის ნიმუში</li>
          <li>{props.component5}ვიზუალის ნიმუში</li>
        </ul>
      </div>
    </div>
  );
}
