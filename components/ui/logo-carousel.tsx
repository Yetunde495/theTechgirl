"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react";
import { AnimatePresence, motion } from "motion/react";
// Define the structure for our logo objects
interface Logo {
  name: string;
  id: number;
  img: any | string;
}
// Utility function to randomly shuffle an array
// This is used to mix up the order of logos for a more dynamic display
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
// Utility function to distribute logos across multiple columns
// This ensures each column has a balanced number of logos
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);
  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });
  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });
  return columns;
};
// Props for the LogoColumn component
interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentTime: number;
}
// LogoColumn component: Displays a single column of animated logos
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000; // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200; // Stagger the start of each column's animation
    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length);
    const currentIndex = Math.floor(adjustedTime / cycleInterval);
    // Memoize the current logo to prevent unnecessary re-renders
    const CurrentLogo = useMemo(
      () => logos[currentIndex].img,
      [logos, currentIndex]
    );
    return (
      // Framer Motion component for the column container
      <motion.div
        className="w-24 h-14 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} // Start invisible and below final position
        animate={{ opacity: 1, y: 0 }} // Animate to full opacity and final position
        transition={{
          delay: index * 0.1, // Stagger the animation of each column
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {/* AnimatePresence enables animation of components that are removed from the DOM */}
        <AnimatePresence mode="wait">
          {/* Framer Motion component for each logo */}
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            // Animation for when the logo enters
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            // Animation for when the logo is displayed
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            // Animation for when the logo exits
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="w-20 h-20 max-w-[80%] max-h-[70%] object-contain" />
            {/* <img src={CurrentLogo} className="object-contain" /> */}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    );
  }
);
// Main LogoCarousel component
function LogoCarousel({ columnCount = 4 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  // Memoize the array of logos to prevent unnecessary re-renders
   

  const allLogos: Logo[] = useMemo(
    () => [
       {name: "React", id: 1, img: ReactLogo },
       { name: "Nextjs", id: 2, img: NextLogo },
       { name: "Typescript", id: 3, img: ReactLogo },
       { name: "Tailwind", id: 4, img: ReactLogo },
      //   { name: "Stripe", id: 5, img: StripeIcon },
      // { name: "CEO Supabase", id: 6, img: SupabaseIcon },
      // { name: "Vercel", id: 7, img: VercelIcon },
      // { name: "Claude", id: 8, img: ReduxLogo },
      
      
      
     
      // { name: "OpenAI", id: 9, img: OpenAIIconBlack },
    ],
    []
  );
  // Distribute logos across columns when the component mounts
  useEffect(() => {
    const distributedLogos = distributeLogos(allLogos, columnCount);
    setLogoSets(distributedLogos);
  }, [allLogos]);
  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);
  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);
  // Render the logo columns
  return (
    <div className="flex space-x-4 w-full">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}



export function ReactLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg preserveAspectRatio="xMidYMid"
      {...props} viewBox="0 0 128 128">
<g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
</svg>
  );
}



export const ReduxLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 244"
     width="256"
      height="260"
    {...props}
  >
    <path
      fill="#bc4ab2"
      d="M177.4 142.9c5.7-.5 10-5.4 9.8-11.1-.2-5.7-5-10.3-10.8-10.3h-.4c-6 .2-10.6 5.2-10.4 11.2.2 5.7 5 10.3 10.8 10.3zM94.9 196.3c-9.7 0-18.7-1.3-26.8-3.8-4.5-1.3-9.4 1.1-10.8 5.6-1.4 4.5 1.1 9.4 5.6 10.8 9.7 3 20.2 4.5 31.5 4.5 17.4 0 33.5-3.3 47.7-9.5 13.6-5.9 25.4-14.2 35.3-24.7 9.4-9.9 16.8-21.3 21.8-34 4.8-12.2 7.2-25.4 7.2-39.3 0-14.2-2.7-27.9-8.1-40.9-5.5-13.4-13.2-25.2-22.7-35.3-10.2-10.8-22.6-19.3-36.6-25.3-13.7-5.8-28.6-8.8-44.2-8.8-10.2 0-20.1 1.1-29.7 3.3-4.6 1-7.6 5.5-6.6 10.1 1 4.6 5.5 7.6 10.1 6.6 8.4-1.8 17.2-2.8 26.1-2.8 27.2 0 51.8 9.1 71.1 26.3 18.9 17.1 29.2 40.8 29.2 67.2 0 12-2.1 23.6-6.3 34.6-4.1 10.6-10.3 20.2-18.2 28.5-7.8 8.2-17.1 14.9-27.7 19.9-11 5.2-23.5 7.8-37.3 7.8z"
    />
  </svg>
);


const NextLogo = (props: SVGProps<SVGSVGElement>) => (
 <svg  preserveAspectRatio="xMidYMid"
      {...props} viewBox="0 0 128 128">
<circle cx="64" cy="64" r="64"></circle><path fill="url(#a)" d="M106.317 112.014 49.167 38.4H38.4v51.179h8.614v-40.24l52.54 67.884a64.216 64.216 0 0 0 6.763-5.209z"></path><path fill="url(#b)" d="M81.778 38.4h8.533v51.2h-8.533z"></path><defs><linearGradient id="a" x1="109" x2="144.5" y1="116.5" y2="160.5" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><linearGradient id="b" x1="121" x2="120.799" y1="54" y2="106.875" gradientTransform="scale(.71111)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient></defs>
</svg>
);

export { LogoCarousel };
