import Footer from "./genericComponents/Footer/Footer";
import Header from "./genericComponents/Header/Header";
// import HomePage from "./pages/HomePage";
// import NewsPage from "./pages/NewsPage";
// import ContactPage from "./pages/ContactPage";
// import AboutUsPage from "./pages/AboutUsPage";
import DiscoverPage from "./pages/DiscoverPage";

// css
import "./css/reset.css";
import "./css/General.css";

function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/* <ContactPage /> */}
      {/* <NewsPage /> */}
      {/* <AboutUsPage /> */}
      <DiscoverPage />
      <Footer />
    </>
  );
}

export default App;
