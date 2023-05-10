import React from "react";
import TopDestinationTemplate from "./TopDestinationTemplate";
import TopDestinationCard from "./components/TopDestiantionCard";
export default function TopDestination() {
  return (
    <>
      <TopDestinationTemplate boxes={<TopDestinationCard />} />
    </>
  );
}
