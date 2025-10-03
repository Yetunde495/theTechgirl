"use client";

import * as React from "react";

interface ParallaxCard {
  lightBg?: string;
  darkBg?: string;
  content: React.ReactNode;
}

interface ParallaxCardsProps {
  cards?: ParallaxCard[];
}

export function ParallaxCard2({
  cards,
}: ParallaxCardsProps) {
  return (
    <section className="relative w-full max-md:overflow-x-hidden min-h-screen no-scrollbar">
      <div  className="relative min-h-[90vh] max-md:overflow-x-hidden no-scrollbar">
        {cards?.map((card, index) => (
          <div key={index} className="sticky top-0 py-[7%] min-h-[80vh] max-md:overflow-x-hidden no-scrollbar z-[1]">
            <div
              className={`w-full h-full flex items-center no-scrollbar overflow-x-hidden  justify-center p-8 max-sm:px-1 rounded-none bg-[#f8f7f7] dark:bg-[#030711]`}
            >
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ParallaxCards({ cards }: ParallaxCardsProps) {
  return (
    <section className="relative w-full no-scrollbar">
      <div className="relative">
        {cards?.map((card, index) => (
          <div
            key={index}
            className={`sticky top-0 z-[1] min-h-screen   ${index !== cards.length - 1 ? 'pb-[20vh]' : ''}`}
          >
            <div
              className="w-full min-h-screen flex flex-col items-center justify-center 
                         p-8 max-sm:px-1 bg-[#f8f7f7] dark:bg-[#030711]"
            >
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

