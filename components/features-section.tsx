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
          You get products people enjoy using
        </h2>
        <p className="text-muted-foreground sm:text-lg max-w-3xl">
          I build with users in mind by focusing on the little details that make
          your platform feel smooth, intuitive, and worth coming back to.{" "}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 w-full h-full gap-x-1.5 gap-y-1.5 max-lg:gap-y-3 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-gray-100 dark:bg-gray-900/70 p-2">
        {/* Card 1: Detailed Feature with Icon (High-Performance Architecture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-[#713cbc]/5 backdrop-blur-lg dark:border dark:border-white/10 dark:bg-none bg-gradient-to-b from-white via-white to-[#713cbc41] bg-cover bg-center bg-no-repeat lg:row-span-2 rounded-2xl py-4 max-sm:pb-1 px-5 relative overflow-hidden"
        >
          <div className="flex h-full w-full flex-col justify-between">
            <div>
              <h3 className="mt-4 text-xl z-10 font-semibold text-black dark:text-white">
                High Performance & Scalability
              </h3>
              <p className="mt-2 max-sm:text-sm text-muted-foreground">
                
                I make sure your product loads fast, runs smoothly, and stays reliable, no matter how many users you get.
              </p>
            </div>
            <div className="w-full">
              <DotLottieReact
                src="https://lottie.host/7a1f10e2-2fbd-4339-872e-e7ae78a39410/tyEt8EE9Sg.lottie"
                loop
                autoplay
                className="relative w-full h-full scale-[.4] md:scale-75 -bottom-[2rem]
                "
              />
            </div>
          </div>
        </motion.div>

        {/* Card 2: Big Stat Feature (User-Centered Engineering & Integration) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="h-full flex flex-col max-sm:gap-y-3 relative"
        >
          <div className="bg-white dark-glass rounded-2xl max-h-[60px] h-full py-2 flex items-center px-5 mb-1.5">
            <p className="text-lg font-medium flex gap-2 items-center">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />{" "}
              For me, frontend is more than visuals
            </p>
          </div>
          <div className="bg-white dark-glass rounded-2xl py-4 px-5 h-full">
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
              Protected User Experience
            </h3>
            <p className="mt-2 max-sm:text-sm text-muted-foreground">
              From data validation to secure user sessions, I ensure your users can share sensitive information on your app without
              worrying about data security & breaches.
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
            I build custom components, patterns, and clear
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
        <div className="lg:col-span-2 flex flex-col lg:flex-row items-center justify-between bg-white dark:bg-gray-900/70 rounded-2xl p-6 space-y-4 md:space-y-0 md:space-x-4">
          <div className="">
            {/* <h3 className="text-xl font-semibold text-black dark:text-white">
              Transparent. Timely. True to the Plan
            </h3> */}
            <p className="mt-1 max-sm:text-sm text-muted-foreground">
              Every milestone is clear. Your feedback is
              prioritized, and I make sure your project wraps up right on
              schedule.
            </p>
          </div>
          <div className="w-full flex items-end justify-end">
            <div className="max-sm:min-w-[240px]">
              <a href="#contact" className="">
                <button className="group max-sm:w-full relative max-sm:py-3 inline-flex shadow-gray-700/40 dark:bg-white dark:text-black shadow-xl py-2 items-center hover:pr-3 delay-75 justify-center rounded-full bg-neutral-950 pl-6 pr-1 transition font-medium text-neutral-50">
                  <span className="z-10 pr-2">Let's Build Together</span>
                  <div className="flex items-center justify-center max-sm:absolute max-sm:right-1 max-sm:group-hover:right-3 h-7 w-7 -rotate-45  group-hover:translate-x-2 duration-200 group-hover:rotate-0 rounded-full bg-white dark:bg-black transition-all">
                    <ArrowRight className="h-5 w-5 text-neutral-800 dark:text-neutral-50" />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
