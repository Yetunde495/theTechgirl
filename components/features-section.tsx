"use client";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Sans } from "@/app/fonts";
import CountUp from "./ui/count-up";
import { ArrowRight } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-24 container mx-auto">
      {/* Header and Paragraph */}
      <div className=" pt-15 px-4 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-purple-950/5 dark:bg-purple-950/30 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-1.5"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Why Choose Me?
        </motion.div>
        <h2
          className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-3 max-w-[600px]`}
        >
          You get products that users love
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          I build with people in mind — clear design, quick performance, and
          seamless flow. I focus on the details that make your platform feel
          effortless and keep users coming back.{" "}
        </p>
      </div>

      {/* Main Features Grid - Mirrors the 5-card layout */}
      <div className="mt-8 grid grid-cols-1 gap-x-1.5 gap-y-4 md:grid-cols-3 rounded-2xl bg-gray-100 dark:bg-gray-900/70 p-2">
        {/* Card 1: Detailed Feature with Icon (High-Performance Architecture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark-glass row-span-2 rounded-2xl py-4 max-sm:pb-1 px-5 relative overflow-hidden"
        >
          <h3 className="mt-4 text-xl z-10 font-semibold text-black dark:text-white">
            Built for Performance and Growth
          </h3>
          <p className="mt-2 max-sm:text-sm text-muted-foreground">
            I ensure your products loads quickly, runs smoothly, and stay
            consistent even as your users grow — helping you keep performance
            high and downtime low.{" "}
          </p>
          <div className=" w-full">
            <DotLottieReact
              src="https://lottie.host/7a1f10e2-2fbd-4339-872e-e7ae78a39410/tyEt8EE9Sg.lottie"
              loop
              autoplay
              className="relative w-full h-full scale-[.4] md:scale-75 -bottom-[2rem]
                "
            />
          </div>
        </motion.div>

        {/* Card 4: Big Stat Feature (User-Centered Engineering & Integration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className=""
        >
          <div className="bg-white dark-glass rounded-2xl py-4 px-5 mb-2 relative overflow-hidden">
            <p className="text-lg font-semibold ">
              Products that are beyond designs and code
            </p>
          </div>
          <div className="bg-white dark-glass rounded-2xl py-4 px-5 relative overflow-hidden">
            <CountUp
              from={20}
              to={100}
              separator=","
              direction="up"
              duration={1}
              text="%"
              className="text-6xl font-bold text-[#713cbc]"
            />
            {/* <p className="text-6xl font-bold text-[#713cbc]">100%</p> */}
            <h3 className="mt-2 text-xl font-semibold text-black dark:text-white">
              Flawless and Protected User Experience
            </h3>
            <p className="mt-2 max-sm:text-sm text-muted-foreground">
              From data validation to secure user sessions, I design every layer
              of your product to protect data, prevent breaches, and maintain
              reliability. Users can share sensitive information securely
              without worrying about data security.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Simple Pill-Style Feature (Intuitive Fluid Interactions) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark-glass rounded-2xl py-4 px-5 relative overflow-hidden"
        >
          <h3 className="mt-4 text-xl z-10 font-semibold text-black dark:text-white">
            Smart & Reliable Design System
          </h3>
          <p className="mt-2 max-sm:text-sm text-muted-foreground">
            I build custom & functional components, patterns, and clear
            standards that match your brand, giving you a clean, unified
            interface that saves time and cost as you expand.
          </p>
          <div className="w-full">
            <DotLottieReact
              src="https://lottie.host/95f83961-5916-46d8-a611-5a6d3371877c/Wkron6xWQV.lottie"
              loop
              autoplay
              className="relative w-full h-full -bottom-[2rem]
                "
            />
          </div>
        </motion.div>
        {/* <div></div> */}
        {/* Bottom Row - Adapted to match image */}
        <div 
        
        className="md:col-span-2 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900/70 rounded-2xl p-6 space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-primary text-white rounded-full px-4 py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-4 h-4 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            C
          </button>

          <div className="w-3 h-3 bg-red-500 rounded-full" />
          <div>
            <h3 className="text-xl font-semibold text-black">
              Quick Access Tools
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Faster, easier ways to integrate and customize features.
            </p>
          </div>
          <div className="">
            <button className="group max-sm:w-full relative max-sm:py-3 inline-flex shadow-gray-700/40 dark:bg-white dark:text-black shadow-xl py-2 items-center hover:pr-3 delay-75 justify-center rounded-full bg-neutral-950 pl-6 pr-1 transition font-medium text-neutral-50">
              <span className="z-10 pr-2">Let's Build Together</span>
              <div className="flex items-center justify-center max-sm:absolute max-sm:right-1 max-sm:group-hover:right-3 h-7 w-7 -rotate-45  group-hover:translate-x-2 duration-200 group-hover:rotate-0 rounded-full bg-white dark:bg-black transition-all">
                <ArrowRight className="h-5 w-5 text-neutral-800 dark:text-neutral-50" />
              </div>
            </button>
          </div>
        </div>
      </div>


   
 



    </section>
  );
};
