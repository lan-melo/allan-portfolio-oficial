import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Companies } from "@/components/Companies";
import { Resume } from "@/components/Resume";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Companies />
      <Resume />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
