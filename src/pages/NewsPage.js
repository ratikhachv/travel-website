import React from "react";
import PagesHeading from "../genericComponents/PagesHeading/PagesHeading";
import NewsSection from "../modules/NewsPage/NewsSection/NewsSection";
import NewsPageTemplate from "../modules/NewsPage/NewsPageTemplate";

export default function NewsPage() {
  return (
    <>
      <NewsPageTemplate
        pagesHeading={<PagesHeading />}
        newsSection={<NewsSection />}
      />
    </>
  );
}
