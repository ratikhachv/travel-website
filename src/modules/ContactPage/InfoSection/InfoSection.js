import InfoMap from "./components/InfoMap";
import InfoText from "./components/InfoText";
import InfoSectionTemplate from "./InfoSectionTemplate";

export default function InfoSection() {
  return (
    <>
      <InfoSectionTemplate
        mapComponent={<InfoMap />}
        formComponent={<InfoText />}
      />
    </>
  );
}
