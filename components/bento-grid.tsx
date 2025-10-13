"use client"

import { motion } from "framer-motion"
import { Palette, Code2, Smartphone, Zap, Globe, Shield } from "lucide-react"

const bentoItems = [
  {
    id: 1,
    title: "Interactive UI Components",
    description: "Custom-built components that enhance user engagement and create memorable experiences",
    icon: Code2,
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-purple-500 to-blue-600"
  },
  {
    id: 2,
    title: "Responsive Design Systems",
    description: "Scalable design systems that work perfectly across all devices",
    icon: Smartphone,
    className: "md:col-span-1",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Lightning-fast load times and smooth animations",
    icon: Zap,
    className: "md:col-span-1",
    gradient: "from-indigo-500 to-purple-600"
  },
  {
    id: 4,
    title: "Modern Web Technologies",
    description: "Cutting-edge frameworks and tools for scalable applications",
    icon: Globe,
    className: "md:col-span-1",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 5,
    title: "Accessibility First",
    description: "Inclusive design that works for everyone",
    icon: Shield,
    className: "md:col-span-1",
    gradient: "from-pink-500 to-purple-600"
  },
  {
    id: 6,
    title: "Custom Design Solutions",
    description: "Unique visual identities that capture your brand essence",
    icon: Palette,
    className: "md:col-span-2",
    gradient: "from-blue-500 to-purple-600"
  }
]

export function BentoGrid() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Crafting Digital
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every component I build is designed to enhance user journeys and drive meaningful interactions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                transition: { duration: 0.3 }
              }}
              className={`${item.className} glass p-8 rounded-3xl hover:glow transition-all duration-500 group cursor-pointer relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
              
              <div className="relative z-10">
                

                <h3 className="font-playfair text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}