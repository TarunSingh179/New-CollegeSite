import Hero from "@/components/home/Hero";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import Rankings from "@/components/home/Rankings";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Programs from "@/components/home/Programs";
import PrincipalMessage from "@/components/home/PrincipalMessage";
import Facilities from "@/components/home/Facilities";
import Placements from "@/components/home/Placements";
import Announcements from "@/components/home/Announcements";
import News from "@/components/home/News";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import WaveDivider from "@/components/animations/WaveDivider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <Rankings />
      <About />
      <WhyChooseUs />
      <WaveDivider fill="#F3F4F6" />
      <Programs />
      <PrincipalMessage />
      <WaveDivider fill="#ffffff" flip />
      <Facilities />
      <Placements />
      <WaveDivider fill="#F3F4F6" />
      <Announcements />
      <News />
      <Testimonials />
      <CTABanner />
    </>
  );
}
