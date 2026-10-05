import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="atenux-landing">
    <a className="skip-link" href="#conteudo">
      Pular para o conteúdo
    </a>
    <Navbar />
    <main id="conteudo">
      <Hero />
      <Services />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;
