import "./LanguageDropdown.css";
import GeoFlag from "../../../../assets/georgia-flag-icon.png";
import UsdIcon from "../../../../assets/dollar-sign.png";

export default function LaguangeDropdown() {
  return (
    <>
      <div className="dropdown-container">
        <img className="geoFlag" src={GeoFlag} alt="Language icon" />
        <select id="language-select">
          <option value="ge">GEO</option>
          <option value="en">ENG</option>
        </select>
        <img className="usdIcon" src={UsdIcon} alt="valuta-img" />
        <select id="currency-select">
          <option value="USD">USD</option>
          <option value="GEL">GEL</option>
        </select>
      </div>
    </>
  );
}
