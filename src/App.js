import FixedHeader from "./genericComponents/Header/FixedHeader/FixedHeader";
// import FixedHeaderTemplate from "./modules/Header/FixedHeader/FixedHeaderTemplat
import StaticHeader from "./genericComponents/Header/staticHeader/StaticHeader"
// css
import "./css/reset.css";

function App() {
  return (
    <>
    <StaticHeader/>
      <FixedHeader />
    </>
  );
}

export default App;
