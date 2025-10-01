import { Navigation } from "@/components/navigation";
import { BentoGrid } from "@/components/bento-grid";
import { ProjectsSection } from "@/components/projects-section";
import { Process } from "@/components/process-timeline";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ValueProposition } from "@/components/value-proposition";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero-section";
import ToolsSection from "@/components/tools-section";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <main className="">
        <Navigation />
        <div className="hero-section">
          <div className="container mx-auto px-4 py-[7%] gap-y-16 gap-x-5 flex max-lg:flex-col justify-center items-center h-full min-h-[98vh]">
            <div className="w-full lg:max-w-3xl max-sm:mt-[90px] max-lg:mt-[7%]">
              <Hero />
            </div>
            <div className="w-full flex justify-end">
              {/* <DynamicIslandProvider initialSize={"default"}>
                <div>
                  <AnimatedProfile />
                </div>
              </DynamicIslandProvider> */}
              <Image 
               src="/images/hero-img.png"
               width={600}
               height={400}
               alt="hero-image"
               className="lg:scale-90 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* <ToolsSection /> */}
         {/* <BentoDemo /> */}
        <BentoGrid />
        <ProjectsSection />
        <Process />
        <TestimonialsSection />
        <ValueProposition />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
