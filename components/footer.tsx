"use client";

import { Glass, Sans } from "@/app/fonts";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yetunde495" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yetunde-morenikeji" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/morenikeji_48" },
  { name: "Email", icon: Mail, href: "mailto:morenikejiy48@gmail.com" },
];

const footerLinks = [
  {
    title: "Work",
    links: [
      { name: "Projects", href: "#projects" },
      { name: "Why Choose Me?", href: "#value" },
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
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-xl md:px-2 px-1 lg:px-4 py-3">
      <div className=" px-6 pt-16 pb-4 bg-primary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 container mx-auto mb-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div
              className={` ${Glass.className} text-3xl font-bold text-white mb-4`}
            >
              theTechgirl
            </div>
            <p className="text-slate-200 mb-6 leading-relaxed md:max-w-[80%]">
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
                  <social.icon className="w-5 h-5 text-slate-100" />
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
              <h3 className="font-semibold mb-4 text-slate-100">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-slate-200/80 hover:text-slate-100 transition-colors duration-300"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex flex-col items-center pb-5 border-transparent justify-center pointer-events-none"
        >
          <span className={`${Sans.className} whitespace-nowrap font-extrabold text-[18vw] tracking-tight leading-none text-slate-100 opacity-[0.09]`}>
            theTechgirl
          </span>
          <div className="absolute left-0 w-full -bottom-3 h-20 lg:h-[120px] 2xl:h-40 bg-gradient-to-b from-transparent via-[#713cbc]   to-[#713cbc]" />
        </motion.div>
      </div>
    </footer>
  );
}
