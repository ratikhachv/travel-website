// import FixedHeaderTemplate from "./modules/Header/FixedHeader/FixedHeaderTemplat
import Footer from "./genericComponents/Footer/Footer";
import Header from "./genericComponents/Header/Header";
// import FooterLogo from "./genericComponents/Footer/components/FooterLogo";

// css
import "./css/reset.css";
import "./css/General.css";
import HomePage from "./pages/HomePage";
import WelcomeSectionTemplate from "./modules/HomePage/WelcomeSection/WelcomeSectionTemplate";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
      <WelcomeSectionTemplate />
    </>
  );
}

export default App;
