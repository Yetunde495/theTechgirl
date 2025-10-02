"use client";
import { Sans } from "@/app/fonts";
import { useScroll, useTransform, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 px-[4%]">
      <div className="max-w-7xl mx-auto pt-15 px-4 md:px-8 lg:px-10 text-left">
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
          className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-3 max-w-3xl`}
        >
          I build products users actually enjoy using
        </h2>
      </div>
      <div className="relative max-w-7xl mx-auto grid pt-[7%] md:px-8 lg:px-10 lg:grid-cols-2 grid-cols-1 gap-10 place-items-center">
        <div className="h-full w-full rounded-[32px] ">
          <img
            src="/images/about.jpg"
            alt="about-image"
            className="h-full w-full object-cover rounded-[32px] drop-shadow-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-muted-foreground text-lg max-w-3xl">
            I’m Yetunde, a frontend engineer with over 3 years of experience
            turning ideas into clean, interactive websites. My journey started
            with a curiosity for how design meets code, and over the years I’ve
            worked on platforms for learning, productivity, health, and
            e-commerce.{" "}
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl">
            I focus on building interfaces that feel smooth and easy to use,
            from custom components and responsive layouts to dashboards and
            real-time interactions. What makes me different is the way I bridge
            design and development. I don’t just code what’s given, I think
            through user flows, suggest improvements, and make sure every detail
            adds up to a better experience.{" "}
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl">
            When we work together, you get more than just code — you get a
            partner who listens, understands your goals, and brings clarity to
            the process. Outside of work, I enjoy reading crime thriller novels,
            sharing frontend tips, and exploring culture through food and
            animes.{" "}
          </p>

          <a>
            <button className="group bg-primary shadow-[#713cbc]/40 text-white hover:bg-opacity-90 relative inline-flex  shadow-xl hover:-translate-y-0.5 transition duration-200  items-center justify-center rounded-full px-6 font-medium">
              <span className="py-2.5">Let’s Build Together</span>
              <div className="ml-1 rounded-full bg-white h-5 w-5 flex justify-center items-center transition-all duration-200 group-hover:translate-x-2">
                <ArrowRight className="h-4 w-4 text-black" />
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
