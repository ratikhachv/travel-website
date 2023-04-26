// import FixedHeaderTemplate from "./modules/Header/FixedHeader/FixedHeaderTemplat
import Footer from "./genericComponents/Footer/Footer";
import Header from "./genericComponents/Header/Header";
// import FooterLogo from "./genericComponents/Footer/components/FooterLogo";
// css
import "./css/reset.css";
import "./css/General.css";
import HomePage from "./pages/HomePage";


import TestimonialCard from "./modules/HomePage/Testimonial/components/TestimonialCard";
import SearchBar from "./modules/HomePage/WelcomeSection/components/SearchBar";



function App() {
  return (
    <>
      <Header />
      <HomePage />

      <SearchBar/>
      <TestimonialCard/>

      <Footer />

      <TestimonialTemplate />
    </>
  );
}

export default App;
