import "./InfoText.css";
export default function InfoText() {
  return (
    <div className="info-text-mainDiv">
      <div className="information-div">
        <div className="div-left">
          <p className="information-text">
            Address :
            <p className="informationText">&nbsp;&nbsp;JL.Cindelaras No.205A</p>
          </p>
          <p className="information-text">
            City :
            <p className="informationText">&nbsp;&nbsp;Yogyakarta, Indonesia</p>
          </p>
          <p className="information-text">
            Open :<p className="informationText">&nbsp;&nbsp;At 8AM</p>
          </p>
        </div>
        <div className="div-right">
          <p className="information-text">
            Phone :
            <p className="informationText">&nbsp;&nbsp;+62 1234 432 567</p>
          </p>
          <p className="information-text">
            Email :
            <p className="informationText">&nbsp;&nbsp;info@travelaja.com</p>
          </p>
          <p className="information-text">
            Close :<p className="informationText">&nbsp;&nbsp;At 8PM</p>
          </p>
        </div>
      </div>
      <p className="time-text">AVAILABLE AT 9AM - 10PM</p>
      <p className="phone-number">+124 4537 9756</p>
    </div>
  );
}
