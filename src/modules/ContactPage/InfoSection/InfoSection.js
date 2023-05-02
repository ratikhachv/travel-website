import InfoMap from "./components/InfoMap";

export default function InfoSection() {
  return (
    <>
      <InfoSectionTemplate mapComponent={<InfoMap />} />
    </>
  );
}
