import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import QuickSupportSection from "@/components/QuickSupportSection";
import IssuesSection from "@/components/IssuesSection";
import CampaignsSection from "@/components/CampaignsSection";
import RightsGuideSection from "@/components/RightsGuideSection";
import ObservatorySection from "@/components/ObservatorySection";
import InstitutionalCTA from "@/components/InstitutionalCTA";
import TestimoniesStrip from "@/components/TestimoniesStrip";
import Footer from "@/components/Footer";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { blurInUp } from "@/lib/animations";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main id="main-content" className="flex-1 pb-16 md:pb-0">
        <HeroSection />
        <AnimateOnScroll variants={blurInUp}>
          <QuickSupportSection />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <IssuesSection />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <CampaignsSection />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <RightsGuideSection />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <ObservatorySection />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <InstitutionalCTA />
        </AnimateOnScroll>
        <AnimateOnScroll variants={blurInUp}>
          <TestimoniesStrip />
        </AnimateOnScroll>
      </main>
      <Footer />
    </>
  );
}
