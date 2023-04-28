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
        welcomeSection={<WelcomeSection />}
<<<<<<< HEAD
        // whyGeorgia={<WhyGeorgia />}
        topDestination={<TopDestination/>}
=======
        whyGeorgia={<WhyGeorgia />}
        topDestination={<TopDestination />}
>>>>>>> 63acc71a34ec1802522c2a3f33dd04aaa10f550c
        testimonial={<Testimonial />}
      />
    </>
  );
}

export default HomePage;
