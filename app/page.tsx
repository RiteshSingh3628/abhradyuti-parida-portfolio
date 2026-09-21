import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { About } from "@/components/About";
import { PhysicalProfile } from "@/components/PhysicalProfile";
import { Showreel } from "@/components/Showreel";
import { Filmography } from "@/components/Filmography";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SocialRail } from "@/components/SocialRail";

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <QuickLinks />
        <About />
        <PhysicalProfile />
        <Showreel />
        <Filmography />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
