"use client";
import { motion } from "framer-motion";
import { ContainerTextFlip } from "./ui/container-text-flip";
import { Sans } from "@/app/fonts";

export default function Hero() {
  const words = ["Expert", "Developer", "Engineer"];
  return (
    <div className="">
      <motion.div>
        <motion.h1
          className={`text-3xl md:text-5xl xl:text-[44px] ${Sans.className} w-full font-semibold mb-2 tracking-tight`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className={` text-neutral-400 dark:text-slate-200`}>Hey!</span>{" "}
          <span className="text-zinc-900 dark:text-white">I'm Yetunde</span>
        </motion.h1>

        <motion.div
          className={`text-3xl md:text-5xl xl:text-[44px] ${Sans.className} font-semibold text-zinc-900 dark:text-white mb-6 tracking-tight`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
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
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Collaborating with founders, designers, and engineers to shape product
        flows, polish UX, and create frontend solutions that are reliable.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* <Button asChild size="lg">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button> */}
      </motion.div>
    </div>
  );
}
