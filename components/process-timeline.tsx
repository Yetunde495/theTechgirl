"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react"
import { useRef } from "react"

const processSteps = [
  {
    id: 1,
    title: "Discovery & Research",
    description: "Deep dive into your business goals, user needs, and competitive landscape to create a strategic foundation.",
    icon: Search,
    duration: "1-2 weeks",
    deliverables: ["User Research", "Competitive Analysis", "Technical Audit"]
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Create wireframes, interactive prototypes, and high-fidelity designs that solve real user problems.",
    icon: Lightbulb,
    duration: "2-3 weeks",
    deliverables: ["Wireframes", "Interactive Prototype", "Design System"]
  },
  {
    id: 3,
    title: "Development",
    description: "Build scalable, performant applications using modern frameworks and best practices.",
    icon: Code,
    duration: "4-8 weeks",
    deliverables: ["Clean Code", "Performance Optimization", "Cross-browser Testing"]
  },
  {
    id: 4,
    title: "Launch & Optimization",
    description: "Deploy your application and continuously optimize based on real user data and feedback.",
    icon: Rocket,
    duration: "1-2 weeks",
    deliverables: ["Deployment", "Analytics Setup", "Performance Monitoring"]
  },
  {
    id: 5,
    title: "Success & Growth",
    description: "Ongoing support and enhancements to ensure your digital presence continues to drive results.",
    icon: CheckCircle,
    duration: "Ongoing",
    deliverables: ["Maintenance", "Feature Updates", "Growth Analytics"]
  }
]

export function ProcessTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section id="process" ref={containerRef} className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            My
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that transforms ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} mb-8 md:mb-0`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass p-8 rounded-2xl hover:glow transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                      <span className="text-2xl font-bold text-muted-foreground">
                        0{step.id}
                      </span>
                    </div>
                    
                    <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}