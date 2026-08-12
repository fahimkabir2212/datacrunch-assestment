import About from "../components/sections/about/About";
import Hero from "../components/sections/hero/Hero";
import TrustedBy from "../components/sections/trusted-by/TrustedBy";
import SolutionsTabs from "../components/sections/solutions/tabs/SolutionsTabs";
import Solutions from "../components/sections/solutions/Solutions";
import PillarDetail from "../components/sections/solutions/pillar-detail/PillarDetail";
import ProductShowcase from "../components/sections/solutions/product-showcase/ProductShowcase";
import TechStack from "../components/sections/solutions/tech-stack/TechStack";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Solutions>
        <SolutionsTabs />
        <PillarDetail />
        <ProductShowcase />
        <TechStack />
      </Solutions>
    </>
  );
}
