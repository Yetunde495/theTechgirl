"use client";
import { Sans } from "@/app/fonts";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto pt-15 px-4 md:px-8 lg:px-10 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-purple-950/5 dark:bg-purple-950/30 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-1.5"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          About Me
        </motion.div>
        <h2
          className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-3 max-w-[650px]`}
        >
          Frontend Expert, Technical Writer, & Foodie.
        </h2>
      </div>
      <div className="relative container mx-auto grid pt-[7%] px-[4%] md:px-8 lg:px-10 lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        <div className="h-full w-full rounded-[32px] ">
          <img
            src="/images/about.jpg"
            alt="about-image"
            className="h-full w-full object-cover rounded-[32px] drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground md:text-lg max-w-3xl">
            I’m Yetunde, a frontend engineer with over 3 years of experience in
            turning ideas into clean, interactive websites. My journey started
            with a curiosity for how design meets code, and over the years I’ve
            worked on platforms for learning, productivity, health, and
            e-commerce.{" "}
          </p>
          <p className="text-muted-foreground md:text-lg max-w-3xl">
            I focus on building interfaces that feel smooth and easy to use,
            from custom components and responsive layouts to dashboards and
            real-time interactions.{" "}
          </p>
          <p className="text-muted-foreground md:text-lg max-w-3xl">
            What makes me different is the way I bridge design and development.
            I don’t just code what’s given, I think through user flows, suggest
            improvements, and make sure every detail adds up to a better
            experience.{" "}
          </p>
          <p className="text-muted-foreground md:text-lg max-w-3xl">
            Outside of work, I enjoy reading crime thriller novels, sharing
            frontend tips, and exploring culture through food and animes.{" "}
          </p>
          <div className="flex mt-4  max-sm:flex-col w-full items-center max-sm:gap-3 gap-4 my-3">
            <div className="max-sm:w-full">
              <a href="#contact">
                <button className="group max-sm:w-full relative max-sm:py-3 inline-flex shadow-gray-700/40 dark:bg-white dark:text-black shadow-xl py-2 items-center hover:pr-3 delay-75 justify-center rounded-full bg-neutral-950 pl-6 pr-1 transition font-medium text-neutral-50">
                  <span className="z-10 pr-2">Let's Build Together</span>
                  <div className="flex items-center justify-center max-sm:absolute max-sm:right-1 max-sm:group-hover:right-3 h-7 w-7 -rotate-45  group-hover:translate-x-2 duration-200 group-hover:rotate-0 rounded-full bg-white dark:bg-black transition-all">
                    <ArrowRight className="h-5 w-5 text-neutral-800 dark:text-neutral-50" />
                  </div>
                </button>
              </a>
            </div>
            <div className="max-sm:w-full">
              <button className="group relative max-sm:w-full max-sm:py-3 inline-flex py-2 shadow-[#713cbc]/40 shadow-xl items-center hover:pr-3 delay-75 justify-center rounded-full bg-primary pl-6 pr-1 transition font-medium text-neutral-50">
                <span className="z-10 pr-2">Download CV</span>
                <div className="flex items-center justify-center h-7 w-7 max-sm:absolute max-sm:right-1 max-sm:group-hover:right-3  group-hover:translate-x-2 transition-all duration-200 rounded-full bg-white ">
                  <FileText className="h-5 w-5 text-neutral-800 group-hover:hidden transition-all duration-200" />
                  <Download className="h-5 w-5 text-neutral-800 hidden group-hover:block transition-all duration-200" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
