import { Navigation } from "@/components/navigation";
import { BentoGrid } from "@/components/bento-grid";
import { ProjectsSection } from "@/components/projects-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ValueProposition } from "@/components/value-proposition";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero-section";
import { AnimatedProfile } from "@/components/animated-card";
import { DynamicIslandProvider } from "@/components/ui/dynamic-island";

export default function Home() {
  return (
    <>
      <main className="">
        <Navigation />
        <div className="hero-section">
          <div className="container mx-auto px-4 py-[7%] gap-y-16 gap-x-5 flex max-lg:flex-col lg:items-center h-full min-h-[98vh]">
            <div className="w-full lg:max-w-3xl max-sm:mt-[90px] max-lg:mt-[7%]">
              <Hero />
            </div>
            <div>
              <DynamicIslandProvider initialSize={"default"}>
                <div>
                  <AnimatedProfile />
                </div>
              </DynamicIslandProvider>
            </div>
          </div>
        </div>

        <BentoGrid />
        <ProjectsSection />
        <ProcessTimeline />
        <TestimonialsSection />
        <ValueProposition />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
