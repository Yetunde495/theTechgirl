"use client";
import { motion } from "framer-motion";

const ToolsSection: React.FC = () => {
  const highlights = [
    { icon: "/images/tools/next-js.png", style:"w-full max-w-[80px] h-full" },
    { icon: "/images/tools/react.png", style:"w-full max-w-[50px] h-full" },
    { icon: "/images/tools/framer.png",style:"w-full max-w-[150px] h-full" },
    { icon: "/images/tools/tailwind.png", style:"w-full max-w-[150px] h-full" },
    { icon: "/images/tools/git.png", style:"w-full max-w-[70px] h-full" },
    { icon: "/images/tools/ts.png", style:"w-full max-w-[30px] h-full" },
  ];
  return (
    <section className="mx-auto flex py-5 bg-slate-50 dark:bg-white/10 dark:backdrop-blur-lg dark:border dark:border-white/10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-50 mb-4">
           My toolkit for building products
          </h2>
        </motion.div>

        {/* Right Side – Marquee */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="overflow-hidden relative md:col-span-2"
        >
          <div className="flex items-center whitespace-nowrap animate-marquee space-x-16 h-full w-full">
            {highlights.concat(highlights).map((item, i) => {
              return (
                    <img key={i} src={item.icon} className={item.style} />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
