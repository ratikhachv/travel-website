import NavItem from "./NavItem";
import "./NavTemplate.css";

export default function NavTemplate() {
  return (
    <nav>
      <ul className="news-page-ul">
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
        <NavItem />
      </ul>
    </nav>
  );
}
