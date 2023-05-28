import FormSection from "../modules/ContactPage/FormSection/FormSection";
import InfoSection from "../modules/ContactPage/InfoSection/InfoSection";
import ContactPageTemplate from "../modules/ContactPage/ContactPageTemplate";
import React from "react";
import PagesHeading from "../genericComponents/PagesHeading/PagesHeading";

export default function ContactPage() {
  return (
    <ContactPageTemplate
      pagesHeading={<PagesHeading />}
      formSection={<FormSection />}
      infoSection={<InfoSection />}
    />
  );
}
