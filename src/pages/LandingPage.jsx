import LandingLayout from "../components/layouts/landingPage";
import Navbar from "../components/modules/navbar";
import HeroSection from "../components/sections/heroSection";
import FeaturedSection from "../components/sections/featuredSection";
import TheLatestSectoin from "../components/sections/theLatestSection";
import ClassicSpotlight from "../components/sections/ClassicSpotlightSection";
import MemberBenefitSection from "../components/sections/memberBeneiftSection";
import Footer from "../components/modules/Footer";

const LandingPage = () => {
  return (
    <LandingLayout>
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <TheLatestSectoin />
      <ClassicSpotlight />
      <MemberBenefitSection />
      <hr className="hr w-[96%] mx-auto" />
      <Footer />
    </LandingLayout>
  );
};

export default LandingPage;
