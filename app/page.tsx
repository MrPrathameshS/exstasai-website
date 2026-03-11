import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import CaseStudies from "../components/CaseStudies";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Solutions />

        <CaseStudies />

        <CTA />

      </main>

      <Footer />
    </>
  );
}