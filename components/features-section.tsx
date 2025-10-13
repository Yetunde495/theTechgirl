"use client";
import { BellIcon, CalendarIcon, FileTextIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "./ui/bento-grid";
import { AnimatedListDemo } from "./ui/animated-toasts";
import { AnimatedBeamMultipleOutputDemo } from "./ui/animated-beam";
import { ChatDemoCard } from "./ui/chat-demo";
import { motion } from "framer-motion";
import { LogoCarousel } from "./ui/logo-carousel";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Sans } from "@/app/fonts";

const features = [
  {
    Icon: FileTextIcon,
    name: "Smart, Scalable Architecture",
    description:
      "I don’t just write code, I design systems. Clean folder structures, modular patterns, custom reusable components, and future-ready setups that scale with your product.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="border-none h-full w-full  transition-all duration-300 ease-out group-hover:scale-90">
        <img
          src="/images/features/performance.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" /> */}
      </div>
    ),
  },
  {
    Icon: BellIcon,
    name: "Performance & Reliability",
    description:
      "Code-splitting, lazy loading, caching, and smart bundling that make apps light, quick, and stable even under heavy use.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="border-none min-h-[300px]  transition-all duration-300 ease-out group-hover:scale-90">
        {/* <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" /> */}
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: <ChatDemoCard />,
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
];
export function BentoDemo() {
  return (
    <div className="container mx-auto px-4 py-[7%] h-full">
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

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
          className="bg-white dark-glass rounded-2xl py-4 max-sm:pb-1 px-5 relative overflow-hidden"
        >
          <h3 className="mt-4 text-xl z-10 font-semibold text-black">
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
            <p className="text-xl font-semibold ">
              Products that Users Love and Trust
            </p>
          </div>
          <div className="bg-white dark-glass rounded-2xl py-4 px-5 relative overflow-hidden">
            <p className="text-6xl font-bold text-black dark:text-[#713cbc]">100%</p>
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
          <h3 className="text-xl mt-4 font-semibold text-[#713cbc]">
            Smart & Reliable Design System
          </h3>
          <p className="mt-2 max-sm:text-sm text-muted-foreground">
            Custom and scalable components, patterns, and clear standards that
            match your brand, giving you a clean, unified interface that saves
            time and cost as you expand.
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
      </div>

      {/* Bottom Row - Adapted to match image */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900/70 rounded-md p-6 shadow-sm space-y-4 md:space-y-0 md:space-x-4">
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
        <div className="bg-primary">
          <div>
            <LogoCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
