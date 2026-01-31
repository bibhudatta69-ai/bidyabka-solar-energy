import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Subsidy from "@/components/Subsidy";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Locations from "@/components/Locations";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Subsidy />
        <WhyUs />
        <Process />
        <Gallery />
        <FAQ />
        <Locations />
        <LeadForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
