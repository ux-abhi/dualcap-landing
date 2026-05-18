import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import NetflixShowcase from "@/components/NetflixShowcase";
import Story from "@/components/Story";
import Tutorial from "@/components/Tutorial";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <NetflixShowcase />
      <Story />
      <Tutorial />
      <FAQ />
      <Footer />
    </main>
  );
}
