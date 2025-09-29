"use client";
import { motion } from "framer-motion";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { Sans } from "@/app/fonts";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const words = ["Expert", "Developer", "Engineer"];
  return (
    <div className="">
      <motion.div>
        <motion.h1
          className={`text-3xl md:text-4xl xl:text-[44px] ${Sans.className} w-full font-semibold mb-2 tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={` text-[#7e7e7e] dark:text-slate-200`}>Hey!</span>{" "}
          <span className="text-zinc-900 dark:text-white">I'm Yetunde</span>
        </motion.h1>

        <motion.div
          className={`text-3xl md:text-4xl xl:text-[44px] ${Sans.className} font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h1 className="inline-block">
            a Frontend <ContainerTextFlip words={words} /> building products
            that drives growth
          </h1>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-muted-foreground text-lg mb-8 md:max-w-[85%]
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        Collaborating with founders, designers, and engineers to shape product
        flows, polish UX, and create frontend solutions that are reliable.
      </motion.p>

      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Button variant="primary" icon={<ArrowRight className="h-4 w-4" />}>
          View Projects
          {/* <Link href="#projects">
                  
                  
                </Link> */}
        </Button>
        <Button variant="secondary">
          Contact Me
          {/* <Link href="#contact"></Link> */}
        </Button>
      </motion.div>
    </div>
  );
}
