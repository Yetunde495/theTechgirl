"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Code snippet with syntax highlighting colors
const codeSnippet = [
  { type: "keyword", text: "const" },
  { type: "variable", text: "AnimatedComponent" },
  { type: "operator", text: " = " },
  { type: "keyword", text: "() => " },
  { type: "brace", text: "{" },
  { type: "newline" },
  { type: "keyword", text: "  const" },
  { type: "variable", text: " controls" },
  { type: "operator", text: " = " },
  { type: "function", text: "useAnimation" },
  { type: "brace", text: "();" },
  { type: "newline" },
  { type: "newline" },
  { type: "keyword", text: "  useEffect" },
  { type: "brace", text: "(() => " },
  { type: "brace", text: "{" },
  { type: "newline" },
  { type: "variable", text: "    controls" },
  { type: "operator", text: "." },
  { type: "function", text: "start" },
  { type: "brace", text: "({" },
  { type: "newline" },
  { type: "property", text: "      scale: " },
  { type: "value", text: "[1, 1.2, 1]" },
  { type: "brace", text: "," },
  { type: "newline" },
  { type: "property", text: "      transition: " },
  { type: "brace", text: "{" },
  { type: "property", text: " repeat: " },
  { type: "value", text: "Infinity" },
  { type: "brace", text: " }" },
  { type: "newline" },
  { type: "brace", text: "    });" },
  { type: "newline" },
  { type: "brace", text: "  }, []);" },
  { type: "newline" },
  { type: "newline" },
  { type: "keyword", text: "  return" },
  { type: "brace", text: " (" },
  { type: "newline" },
  { type: "tag", text: "    <motion.div" },
  { type: "attribute", text: " animate=" },
  { type: "brace", text: "{" },
  { type: "variable", text: "controls" },
  { type: "brace", text: "}" },
  { type: "tag", text: ">" },
  { type: "newline" },
  { type: "text", text: "      Animated Content" },
  { type: "newline" },
  { type: "tag", text: "    </motion.div>" },
  { type: "newline" },
  { type: "brace", text: "  );" },
  { type: "newline" },
  { type: "brace", text: "};" },
];

// Color mapping for syntax highlighting
const colorMap: Record<string, string> = {
  keyword: "text-purple-400",
  variable: "text-blue-300",
  function: "text-yellow-300",
  brace: "text-gray-400",
  operator: "text-gray-300",
  property: "text-green-300",
  value: "text-orange-300",
  tag: "text-red-300",
  attribute: "text-green-200",
  text: "text-gray-100",
};

// export function CodeAnimationCard() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   useEffect(() => {
//     if (!containerRef.current || !cursorRef.current) return;
    
//     // Create typing animation with GSAP
//     const typewriter = () => {
//       const codeElements = containerRef.current!.querySelectorAll('.code-char');
//       const cursor = cursorRef.current!;
      
//       const tl = gsap.timeline({ 
//         onComplete: () => {
//           // Reset and restart after completion
//           gsap.set(codeElements, { opacity: 0, display: 'none' });
//           setTimeout(typewriter, 1000);
//         } 
//       });
      
//       // Show all elements with a typewriter effect
//       codeElements.forEach((element, index) => {
//         tl.set(element, { display: 'inline' }, index * 0.03);
//         tl.to(element, { opacity: 1, duration: 0.01 }, index * 0.03);
        
//         // Move cursor to current position
//         if (element.previousElementSibling) {
//           const prev = element.previousElementSibling.getBoundingClientRect();
//           tl.to(cursor, { 
//             left: prev.right - containerRef.current!.getBoundingClientRect().left, 
//             top: prev.top - containerRef.current!.getBoundingClientRect().top,
//             duration: 0.01
//           }, index * 0.03);
//         }
//       });
      
//       // Keep cursor visible for a moment after typing
//       tl.to({}, { duration: 1 });
      
//       // Hide cursor after completion
//       tl.to(cursor, { opacity: 0, duration: 0.5 });
//     };
    
//     // Start animation
//     gsap.set(containerRef.current.querySelectorAll('.code-char'), { opacity: 0, display: 'none' });
//     typewriter();
    
//   }, []);
  
//   return (
//     <div className="relative h-80 rounded-2xl border border-border p-6 bg-[#1e1e2e] shadow-lg overflow-hidden">
//       <h3 className="text-xl font-semibold mb-6 text-gray-100">Interactive Code Animations</h3>
      
//       <div 
//         ref={containerRef} 
//         className="font-mono text-sm overflow-auto h-[calc(100%-4rem)] relative text-left whitespace-pre"
//         style={{ 
//           background: "#1e1e2e",
//           lineHeight: 1.6,
//           paddingLeft: "12px",
//           fontFamily: "monospace"
//         }}
//       >
//         {/* Code with syntax highlighting */}
//         {codeSnippet.map((token, index) => {
//           if (token.type === "newline") {
//             return <br key={`nl-${index}`} />;
//           }
          
//           return (
//             <span 
//               key={`${token.type}-${index}`} 
//               className={`code-char ${colorMap[token.type] || ""}`}
//             >
//               {token.text}
//             </span>
//           );
//         })}
        
//         {/* Blinking cursor */}
//         <motion.div
//           ref={cursorRef}
//           className="absolute h-5 w-[2px] bg-white inline-block"
//           animate={{ opacity: [1, 0, 1] }}
//           transition={{ 
//             repeat: Infinity, 
//             duration: 0.8, 
//             ease: "steps(1)" 
//           }}
//           style={{ top: 0, left: 0 }}
//         />
//       </div>
//     </div>
//   );
// }