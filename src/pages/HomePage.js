import React from "react";
import HomePageTemplate from "../modules/HomePage/HomePageTemplate";
import WelcomeSection from "../modules/HomePage/WelcomeSection/WelcomeSection";
import WhyGeorgia from "../modules/HomePage/WhyGeorgia/WhyGeorgia";
import TopDestination from "../modules/HomePage/TopDestination/TopDestination";
import Testimonial from "../modules/HomePage/Testimonial/Testimonial";
import TopDestinationTemplate from "../modules/HomePage/TopDestination/TopDestinationTemplate";
function HomePage() {
  return (
    <>
      <HomePageTemplate

        // welcomeSection={<WelcomeSection />}
        // whyGeorgia={<WhyGeorgia />}
        // topDestiantion={<TopDestination />}
        // testimonial={<Testimonial />}
      />
      <TopDestinationTemplate/>
    </>
  );
}

export default HomePage;
