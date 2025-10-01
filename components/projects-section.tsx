"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react";
import ParallaxCards from "./ui/parallax-cards";
import { Sans } from "@/app/fonts";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    title: "ByteDegree",
    description:
      "An e-learning platform built for students, tutors, and institutions. I worked on modern landing pages, interactive complex dashboards, and payment system, that made teaching and learning feel more connected.",
    image:
      "/images/projects/ByteDegree.png",
    tags: ["React", "TypeScript", "Stripe", "Framer Motion"],
    metrics: { conversion: "+40%", performance: "+60%", users: "50K+" },
    link: "https://www.bytedegrees.com/",
    github: "#",
  },
  {
    id: 2,
    title: "CurateLearn",
    description:
      "Curatelearn is a personalized AI-Copilot for self-learning that includes an analytics dashboard, real-time chat, a structured resource library, quizzes, flashcards, and a smart wallet system",
    image:
      "/images/projects/CurateLearn.png",
    tags: ["React", "WebSocket", "TailwindCSS", "PayStack"],
    metrics: { satisfaction: "+85%", efficiency: "+35%", errors: "-70%" },
    link: "https://curatelearn.com/",
    github: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and accessible mobile banking interface with biometric authentication and smooth micro-interactions",
    image:
      "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React Native", "Biometrics", "Redux", "Expo"],
    metrics: { security: "100%", rating: "4.8/5", downloads: "100K+" },
    link: "#",
    github: "#",
  },
];

export function ProjectsSection() {
  const cards = projects.map((project, index) => ({
    content: (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        className={`grid container mx-auto px-[4%] grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 1 ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Project Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className={`relative group ${
            index % 2 === 1 ? "lg:col-start-2" : ""
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full md:min-h-[384px] h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-2">
                <motion.a
                  href={project.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-2 rounded-full hover:glow"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
                {/* <motion.a
                  href={project.github}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-2 rounded-full hover:glow"
                >
                  <Github className="w-4 h-4" />
                </motion.a> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Info */}
        <div
          className={`space-y-6 ${
            index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
          }`}
        >
          <motion.h3
            initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-playfair text-3xl md:text-4xl text-left font-bold"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:text-lg text-muted-foreground text-left leading-relaxed"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="glass px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid-cols-3 gap-4 hidden"
          >
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key} className="glass p-4 rounded-xl text-center">
                <div className="text-2xl font-bold text-purple-500 mb-1">
                  {value}
                </div>
                <div className="text-xs text-muted-foreground capitalize">
                  {key}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="w-full self-start">
            <a target="_blank" href={project.link}>
              <Button
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                View Project
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    ),
  }));

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto pt-15 px-4 md:px-8 lg:px-10 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-purple-950/5 dark:bg-purple-950/30 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-1.5"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Case Studies
        </motion.div>
        <h2
          className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-3`}
        >
          Projects that show what I do best
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Here are some of the products I’ve helped shape; from E-learning
          platforms to e-commerce. Each one taught me something new and shows
          how I build clean, useful, and people-friendly websites.{" "}
        </p>
      </div>

      <div>
        <ParallaxCards cards={cards} />
      </div>
    </section>
  );
}
