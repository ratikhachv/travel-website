import React from "react";
import HomePageTemplate from "../modules/HomePage/HomePageTemplate";
import WhyGeorgia from "../modules/HomePage/WhyGeorgia/WhyGeorgia";
import TopDestination from "../modules/HomePage/TopDestination/TopDestination";
import Testimonial from "../modules/HomePage/Testimonial/Testimonial";
import WelcomeSection from "../modules/HomePage/WelcomeSection/WelcomeSection";

function HomePage() {
  return (
    <>
      <HomePageTemplate
        welcomeGeorgia={<WelcomeSection />}
        // whyGeorgia={<WhyGeorgia />}
        topDestination={<TopDestination />}
        testimonial={<Testimonial />}
      />
    </>
  );
}

export default HomePage;
