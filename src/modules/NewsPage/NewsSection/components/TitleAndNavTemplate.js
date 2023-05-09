import "./TitleAndNavTemplate.css";
import NavTemplate from "./NavTemplate";
export default function TitleAndNavTemplate() {
  return (
    <>
      <div className="title-nav-div">
        <h1 className="newsPage-title">Travel WebSite Articles</h1>
        <p className="newsPage-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
        </p>
        <NavTemplate />
      </div>
    </>
  );
}
