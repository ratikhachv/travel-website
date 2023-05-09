import AboutUsPageTemplate from "./../modules/AboutUsPage/AboutUsPageTemplate";
import WhyChooseUs from "./../modules/AboutUsPage/WhyChooseUs/WhyChooseUs";
import AboutWebsite from "../modules/AboutUsPage/AboutWebsite/AboutWebsite";
import OurTeam from "../modules/AboutUsPage/OurTeam/OurTeam";
import React from "react";

export default function AboutUsPage() {
  return (
    <AboutUsPageTemplate
      whyChooseUs={<WhyChooseUs />}
      aboutWebsite={<AboutWebsite />}
      ourTeam={<OurTeam />}
    />
  );
}
