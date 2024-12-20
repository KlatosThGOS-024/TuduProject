import { Features } from "../components/Features";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { OfferSection } from "../components/OfferSection";
import { QualitySection } from "../components/QualitySection";
import { SignLogin } from "../components/SignLogin";
import { Header } from "../components/Header";
export const HomePage = () => {
  return (
    <>
      <SignLogin />
      <Header />
      <HeroSection />
      <OfferSection />
      <QualitySection />
      <Features />
      <Footer />
    </>
  );
};
