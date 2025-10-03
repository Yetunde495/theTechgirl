import { Navigation } from "@/components/navigation";
import { BentoGrid } from "@/components/bento-grid";
import { ProjectsSection } from "@/components/projects-section";
import { Process } from "@/components/process-timeline";
import { ValueProposition } from "@/components/value-proposition";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero-section";
import ToolsSection from "@/components/tools-section";
import Image from "next/image";
import { Github, Linkedin, Mail, MousePointerClickIcon } from "lucide-react";
import AboutSection from "@/components/about-section";

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
            <div className="w-full flex flex-col items-center relative gap-3 justify-end">
              <Image
                src="/images/hero-img.png"
                width={600}
                height={400}
                alt="hero-image"
                className="lg:scale-90 drop-shadow-2xl"
              />
              <div className="w-full -mt-6 sm:ml-[4%]  sm:max-w-[75%] bg-slate-50 dark:bg-[#713cbc] shadow-xl border dark:border-none dark:border-t border-slate-200 flex items-center justify-between gap-1 px-4 py-1.5 rounded-xl mb-3">
                <button className="hover:scale-105 dark:text-white duration-150 rounded-md flex justify-center items-center ">
                  <Github className="" />
                </button>
                <button className="hover:scale-105 dark:text-white duration-150  flex justify-center items-center ">
                  <Linkedin className="" />
                </button>
                <button className=" dark:text-white hover:scale-105 duration-150 rounded-md flex justify-center items-center ">
                  <Mail className="" />
                </button>

                <button className=" bg-[#713cbc] text-white p-2 border dark:border-none rounded-md flex justify-center items-center gap-2 max-w-[200px] ">
                  <MousePointerClickIcon className="h-5 w-5 scale-x-[-1]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <ToolsSection /> */}
        {/* <BentoDemo /> */}
        <BentoGrid />
        <ProjectsSection />
        <Process />
        <AboutSection />
        {/* <ToolsSection /> */}
        <ValueProposition />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
