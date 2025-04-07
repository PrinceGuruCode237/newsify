import Content from "./components/ui/Content";
import CTA from "./components/ui/CTA";
import FAQ from "./components/ui/FAQ";
import Features from "./components/ui/Features";
import Footer from "./components/ui/Footer";
import Hero from "./components/ui/Hero";
import Nav from "./components/ui/Nav";
import Testimonials from "./components/ui/Testimonial";

function App() {
  return (
    <main className="">
      <Nav />
      <Hero />
      <Content />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
