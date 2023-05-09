import FormSection from "../modules/ContactPage/FormSection/FormSection";
import InfoSection from "../modules/ContactPage/InfoSection/InfoSection";
import ContactPageTemplate from "../modules/ContactPage/ContactPageTemplate";
import React from "react";
import PagesHeading from "../genericComponents/PagesHeading/PagesHeading";
export default function ContactPage() {
  return (
    <>
      <ContactPageTemplate
        pagesHeading={<PagesHeading />}
        formSection={<FormSection />}
<<<<<<< HEAD
        infoSection={<InfoSection />}
=======
        // infoSection={<InfoSection />}
>>>>>>> c4ac14e553ad3f1216d75b0f006a8e2468947567
      />
    </>
  );
}
