import AboutUsPageTemplate from "./../modules/AboutUsPage/AboutUsPageTemplate";
import WhyChooseUs from "./../modules/AboutUsPage/WhyChooseUs/WhyChooseUs";
import AboutWebsite from "../modules/AboutUsPage/AboutWebsite/AboutWebsite";
import OurTeam from "../modules/AboutUsPage/OurTeam/OurTeam";
import PagesHeading from "../genericComponents/PagesHeading/PagesHeading";
import React from "react";

export default function AboutUsPage() {
  return (
    <AboutUsPageTemplate
      pagesHeading={<PagesHeading />}
      whyChooseUs={<WhyChooseUs />}
      aboutWebsite={<AboutWebsite />}
      ourTeam={<OurTeam />}
    />
  );
}
