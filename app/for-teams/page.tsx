import CartSidebar from "@/components/cart/CartSidebar";
import Faqs from "@/components/Faqs";
import Footer from "@/components/footer/Footer";
// import LevelUp from "@/components/for-teams/LevelUp";
import TeamFeaturesSection from "@/components/for-teams/TeamFeaturesSection";
import TeamsHero from "@/components/for-teams/TeamsHero";
import WhyChooseUs from "@/components/for-teams/WhyChooseUs";
import Header from "@/components/header/Header";
import TrustedCarousel from "@/components/TrustedCarousel";
import WhatsAppFloatButton from "@/components/WhatsAppFloatButton";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Header />
      <Toaster position="top-center" containerClassName="z-[999999]" />
      <CartSidebar />
      <TeamsHero />
      <TeamFeaturesSection />
      <TrustedCarousel />
      <WhyChooseUs />
      {/* <LevelUp /> */}
      <Faqs />
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
};

export default page;
