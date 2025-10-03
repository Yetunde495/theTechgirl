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

export default function ParallaxCards({
  cards,
}: ParallaxCardsProps) {
  return (
    <section className="relative w-full min-h-screen no-scrollbar">
      <div  className="relative min-h-[90vh] no-scrollbar">
        {cards?.map((card, index) => (
          <div key={index} className="sticky top-0 py-[7%] min-h-[80vh] max-sm:min-h-[95vh] no-scrollbar z-[1]">
            <div
              className={`w-full h-full flex items-center  overflow-x-hidden no-scrollbar  justify-center p-8 max-sm:px-1 rounded-none bg-[#f8f7f7] dark:bg-[#030711]`}
            >
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
