"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Email", icon: Mail, href: "mailto:hello@alexchen.dev" },
];

const footerLinks = [
  {
    title: "Work",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Process", href: "#process" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Contact", href: "#contact" },
      { name: "Resume", href: "#" },
      { name: "Blog", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              theTechgirl
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Frontend developer crafting exceptional digital experiences that
              drive results and delight users.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="glass p-3 rounded-full hover:glow transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Reach out */}
          <div className="">
            <h4 className="font-semibold text-gray-900 mb-3">
              Reach out to us
            </h4>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-3 bg-[#E8F5FD] rounded-lg hover:bg-[#d4eefd] transition"
            >
              <Mail className="text-primary text-xl" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-800">
                  Send us an email at support@bytedegrees.com
                </span>
                <span className="text-xs text-gray-500">
                  We will reply within 24h
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex flex-col items-center pb-5 border-transparent justify-center pointer-events-none"
        >
          <span className="whitespace-nowrap font-extrabold text-[18vw] leading-none text-slate-900 opacity-[0.03]">
            theTechgirl
          </span>
          <div className="absolute left-0 w-full bottom-0 md:h-16 h-12 lg:h-20 2xl:h-40 bg-gradient-to-b from-transparent via-white   to-white" />
        </motion.div>
      </div>
    </footer>
  );
}
