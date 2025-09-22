"use client"

import { motion } from "framer-motion"
import { Zap, Users, TrendingUp, Shield, Palette, Code2 } from "lucide-react"

const valueProps = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized code and modern frameworks ensure your site loads in under 2 seconds",
    metric: "< 2s load time",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Every decision is based on user research and data-driven insights",
    metric: "95% user satisfaction",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Conversion Focused",
    description: "Strategic design decisions that drive measurable business results",
    metric: "+45% conversions",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Shield,
    title: "Accessibility First",
    description: "WCAG compliant designs that work for everyone, expanding your reach",
    metric: "100% accessible",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Palette,
    title: "Brand Harmony",
    description: "Designs that authentically represent your brand and connect with your audience",
    metric: "Brand aligned",
    gradient: "from-pink-500 to-red-600"
  },
  {
    icon: Code2,
    title: "Scalable Architecture",
    description: "Clean, maintainable code that grows with your business needs",
    metric: "Future-ready",
    gradient: "from-indigo-500 to-blue-600"
  }
]

export function ValueProposition() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            How I Can
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Help You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every project is an opportunity to drive real business results through thoughtful design and development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="glass p-8 rounded-2xl hover:glow transition-all duration-500 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prop.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${prop.gradient} mb-6`}
                >
                  <prop.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Metric Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="inline-block bg-purple-500/10 text-purple-500 px-3 py-1 rounded-full text-sm font-medium mb-4"
                >
                  {prop.metric}
                </motion.div>

                <h3 className="font-playfair text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {prop.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Let's Build Something Amazing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}