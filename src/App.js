import FixedHeader from "./genericComponents/Header/FixedHeader/FixedHeader";
// import FixedHeaderTemplate from "./modules/Header/FixedHeader/FixedHeaderTemplate";
import Login from "./genericComponents/Header/staticHeader/StaticHeader"
// css
import "./css/reset.css";

function App() {
  return (
    <>
    <Login/>
      <FixedHeader />
    </>
  );
}

export default App;
