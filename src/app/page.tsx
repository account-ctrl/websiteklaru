import { Capabilities } from "@/components/landing/capabilities";
import { DualExperience } from "@/components/landing/dual-experience";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <Capabilities />
        <DualExperience />
      </main>
      <Footer />
    </div>
  );
}
