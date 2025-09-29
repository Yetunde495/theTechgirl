"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { SunIcon, MoonIcon, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggleCard() {
  const [isDark, setIsDark] = useState(false);
  const arrowControls = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Arrow pointing animation sequence
  const animateArrow = async () => {
    await arrowControls.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    });
    await arrowControls.start({
      x: 30,
      y: -20,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    });
    await arrowControls.start({
      opacity: 0,
      transition: { duration: 0.3 }
    });
    await arrowControls.start({
      x: 0,
      y: 0,
      opacity: 0,
      transition: { duration: 0.1 }
    });
  };

  useEffect(() => {
    const animationInterval = setInterval(() => {
      animateArrow().then(() => {
        setIsDark(prev => !prev);
      });
    }, 5000);

    const initialTimeout = setTimeout(() => {
      animateArrow().then(() => {
        setIsDark(prev => !prev);
      });
    }, 1000);

    return () => {
      clearInterval(animationInterval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div 
      className="relative h-80 rounded-2xl border border-border p-6 bg-card shadow-lg overflow-hidden"
      ref={cardRef}
    >
      <h3 className="text-xl font-semibold mb-4 text-card-foreground">
        Dynamic Theme System
      </h3>
      
      {/* Mobile device frame */}
      <div className="relative mx-auto w-[280px] h-[440px] scale-[0.65] -mt-8">
        <div className={cn(
          "absolute inset-0 rounded-[3rem] transition-colors duration-1000 border-[14px]",
          isDark ? "border-zinc-800 bg-zinc-900" : "border-zinc-200 bg-white"
        )}>
          {/* Navigation bar */}
          <div className={cn(
            "h-14 px-4 flex items-center justify-between transition-colors duration-1000",
            isDark ? "bg-zinc-800" : "bg-zinc-50"
          )}>
            <div className="flex items-center gap-2">
              <Menu className={cn(
                "w-5 h-5 transition-colors duration-1000",
                isDark ? "text-white" : "text-black"
              )} />
              <span className={cn(
                "font-semibold transition-colors duration-1000",
                isDark ? "text-white" : "text-black"
              )}>
                MyApp
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Theme toggle */}
              <div 
                className={cn(
                  "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-1000",
                  isDark ? "bg-zinc-700" : "bg-zinc-200"
                )}
                onClick={() => setIsDark(prev => !prev)}
              >
                <motion.div 
                  className="w-4 h-4 rounded-full flex items-center justify-center"
                  animate={{ 
                    x: isDark ? 24 : 0,
                    backgroundColor: isDark ? "#1e293b" : "white"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 30 
                  }}
                >
                  {isDark ? (
                    <MoonIcon className="w-3 h-3 text-yellow-300" />
                  ) : (
                    <SunIcon className="w-3 h-3 text-yellow-500" />
                  )}
                </motion.div>
              </div>
              
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-1000",
                isDark ? "bg-zinc-700" : "bg-zinc-200"
              )}>
                <User className={cn(
                  "w-5 h-5 transition-colors duration-1000",
                  isDark ? "text-white" : "text-black"
                )} />
              </div>
            </div>
          </div>
          
          {/* Content cards */}
          <div className="p-4 space-y-4">
            <motion.div 
              className={cn(
                "p-4 rounded-xl transition-colors duration-1000",
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              )}
              animate={{
                scale: [1, 1.02, 1],
                transition: { duration: 0.5, delay: isDark ? 0 : 0.2 }
              }}
            >
              <h4 className={cn(
                "text-lg font-medium mb-2 transition-colors duration-1000",
                isDark ? "text-white" : "text-black"
              )}>
                {isDark ? "And there was darkness" : "Let there be light"}
              </h4>
              <p className={cn(
                "text-sm transition-colors duration-1000",
                isDark ? "text-zinc-400" : "text-zinc-600"
              )}>
                {isDark 
                  ? "Embrace the dark side of design" 
                  : "Illuminate your interface"}
              </p>
            </motion.div>
            
            <motion.div 
              className={cn(
                "p-4 rounded-xl transition-colors duration-1000",
                isDark ? "bg-zinc-800" : "bg-zinc-100"
              )}
              animate={{
                scale: [1, 1.02, 1],
                transition: { duration: 0.5, delay: isDark ? 0.2 : 0 }
              }}
            >
              <h4 className={cn(
                "text-lg font-medium mb-2 transition-colors duration-1000",
                isDark ? "text-white" : "text-black"
              )}>
                {isDark ? "Night mode activated" : "Day mode enabled"}
              </h4>
              <p className={cn(
                "text-sm transition-colors duration-1000",
                isDark ? "text-zinc-400" : "text-zinc-600"
              )}>
                {isDark 
                  ? "Easy on the eyes, heavy on style" 
                  : "Crisp and clear, just like morning"}
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Animated pointer */}
        <motion.div
          className="absolute left-24 top-12 z-10"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={arrowControls}
        >
          <div className="w-6 h-6">
            <img 
              src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535a83c6b2497741a4a1db_peep-cursor.svg" 
              alt="Cursor"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      
      <p className="text-sm mt-2 text-muted-foreground text-center">
        Seamless theme switching with custom animations and transitions
      </p>
    </div>
  );
}