import WelcomeSectionTemplate from "./WelcomeSectionTemplate";
import SearchBar from "./components/SearchBar";

export default function WelcomeSection() {
  return (
    <>
      <WelcomeSectionTemplate searchBar={<SearchBar />} />
    </>
  );
}
