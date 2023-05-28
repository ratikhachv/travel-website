import React from "react";
import AsideSideTemplate from "./AsideSideTemplate";
import MapComp from "./components/MapComp";
import AsideListTempComp from "./components/AsideListTempComp";
import AsideCardComp from "./components/AsideCardComp";

export default function AsideSide() {
  return (
    <AsideSideTemplate
      mapComp={<MapComp />}
      asideCardComp={<AsideCardComp />}
      asideListTempComp={<AsideListTempComp />}
    />
  );
}
