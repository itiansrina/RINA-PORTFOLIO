import Academeics from "../Home Page Component/Academics/Academics";
import AllProfiles from "../Home Page Component/CodingProfile";

import Skill from "../Home Page Component/Skill/Skill";
import Contactme from "../Home Page Component/ContactMe";
import AboutMe from "../Home Page Component/AboutMe";
import Certifications from "../Home Page Component/Certifications/Certifications";
import Banner from "../Home Page Component/Header Section/Banner";
import Footer from "../Footer/Footer";
const Main = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Academeics />
      <Skill />
      <AllProfiles />

      <Certifications />
      <Contactme />
      <Footer />
    </>
  );
};
export default Main;
