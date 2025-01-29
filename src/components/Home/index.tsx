import HeaderComponent from "./Header";
import AboutUsComponent from "./about-us";
import IndonesianLabourInfo from "./indonesian-labour-info";
import ArticlesComponent from "./articles";
import FooterComponent from "./footer"; 

export default function HomeComponent() {
  return (
    <div>
      <HeaderComponent />
      <AboutUsComponent />
      <IndonesianLabourInfo />
      <ArticlesComponent />
      <FooterComponent />
    </div>
  );
}