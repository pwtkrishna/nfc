import Faqs from "@/components/Faqs";
// import LevelUp from "@/components/for-teams/LevelUp";
import TeamFeaturesSection from "@/components/for-teams/TeamFeaturesSection";
import TeamsHero from "@/components/for-teams/TeamsHero";
import WhyChooseUs from "@/components/for-teams/WhyChooseUs";
import TrustedCarousel from "@/components/TrustedCarousel";

const page = () => {
  return (
    <>
      <TeamsHero />
      <TeamFeaturesSection />
      <TrustedCarousel />
      <WhyChooseUs />
      {/* <LevelUp /> */}
      <Faqs />
    </>
  );
};

export default page;
