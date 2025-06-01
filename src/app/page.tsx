import Benefits from "./components/Benefits";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Results from "./components/Results";
export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Results />
      <FAQ />
      <CallToAction />
    </div>
  );
}