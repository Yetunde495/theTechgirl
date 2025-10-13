"use client";
import { motion } from "framer-motion";
import { FlowingLogos } from "./ui/flowing-logo";
import { NextLogo, ReactLogo, Typescript } from "./ui/logos";

const ToolsSection: React.FC = () => {
  const highlights = [
    { icon: "/images/tools/next-js.png", style: "w-full max-w-[80px] h-full" },
    { icon: "/images/tools/react.png", style: "w-full max-w-[50px] h-full" },
    { icon: "/images/tools/framer.png", style: "w-full max-w-[150px] h-full" },
    {
      icon: "/images/tools/tailwind.png",
      style: "w-full max-w-[150px] h-full",
    },
    { icon: "/images/tools/git.png", style: "w-full max-w-[70px] h-full" },
    { icon: "/images/tools/ts.png", style: "w-full max-w-[30px] h-full" },
  ];

  type TechLogo = {
    name: string;
    url: string;
    color: string;
  };

  const techLogos: TechLogo[] = [
    {
      name: "React",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "TypeScript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Next.js",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      name: "Tailwind",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      color: "#38B2AC",
    },
  ];
  return (
    <section className="mx-auto py-2">
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
          {/* <div className="flex items-center whitespace-nowrap animate-marquee space-x-16 h-full w-full">
            {highlights.concat(highlights).map((item, i) => {
              return (
                    <img key={i} src={item.icon} className={item.style} />
              );
            })}
          </div> */}
          <div className="flex items-center whitespace-nowrap animate-marquee space-x-16 h-full w-full">
            {techLogos.concat(techLogos).map((tech, index) => {
              return (
                <motion.div
                  key={tech.name}
                  className="tech-logo flex flex-col items-center p-3"
                  // initial={{ scale: 0.8, opacity: 0 }}
                  // animate={{
                  //   scale: 1,
                  //   opacity: 1,
                  //   y: [0, -10, 0],
                  //   transition: {
                  //     scale: { duration: 0.5, delay: index * 0.2 },
                  //     opacity: { duration: 0.5, delay: index * 0.2 },
                  //     y: {
                  //       repeat: Infinity,
                  //       repeatType: "mirror",
                  //       duration: 2,
                  //       delay: index * 0.5,
                  //       ease: "easeInOut"
                  //     }
                  //   }
                  // }}
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center bg-white shadow-md mb-2"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export function FlowingLogosDemo() {
  return (
    <FlowingLogos
      data={[
        { image: "", name: "Next.js", svg: NextLogo  },
        { image: "", name: "React", svg: ReactLogo },
        { image: "/images/tools/framer.png", name: "Framer" },
        { image: "", name: "Typescript", svg: Typescript },
        { image: "https://logo.clearbit.com/samsung.com", name: "Samsung" },
        {
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          name: "GitHub",
        },
        { image: "https://logo.clearbit.com/slack.com", name: "Slack" },
        { image: "https://logo.clearbit.com/stripe.com", name: "Stripe" },
      ]}
    />
  );
}


export default ToolsSection;
