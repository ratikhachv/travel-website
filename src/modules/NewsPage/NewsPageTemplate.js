import "./../NewsPage/NewsPageTemplate.css";
import React from "react";

export default function NewsPageTemplate(props) {
  return (
    <main>
      {props.pagesHeading}
      {props.newsSection}
    </main>
  );
}
