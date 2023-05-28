import React from "react";
import PagesHeading from "../genericComponents/PagesHeading/PagesHeading";
import DiscoverPAgeTemplate from "../modules/DiscoverPage/DiscoverPageTemplate";
import TextPhotoSide from "../modules/DiscoverPage/TextPhotoSide/TextPhotoSide";
import AsideSide from "../modules/DiscoverPage/AsideSide/AsideSide";

export default function DiscoverPage() {
  return (
    <DiscoverPAgeTemplate
      pagesHeading={<PagesHeading />}
      textPhotoSide={<TextPhotoSide />}
      asideSide={<AsideSide />}
    />
  );
}
