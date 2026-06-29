import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BringTogether from "@/components/BringTogether";
import HowItWorks from "@/components/HowItWorks";
import IdeasByAge from "@/components/IdeasByAge";
import Experiences from "@/components/Experiences";
import PhotoBand from "@/components/PhotoBand";
import WhyGrinXO from "@/components/WhyGrinXO";
import EnquiryBand from "@/components/EnquiryBand";
import Footer from "@/components/Footer";
import MobileWaBar from "@/components/MobileWaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BringTogether />
        <HowItWorks />
        <IdeasByAge />
        <Experiences />
        <PhotoBand />
        <WhyGrinXO />
        <EnquiryBand />
      </main>
      <Footer />
      <MobileWaBar />
    </>
  );
}
