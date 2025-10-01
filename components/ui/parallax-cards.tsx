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
    <section className="relative w-full min-h-screen overflow-x-hidden">
      <div  className="relative min-h-[90vh] overflow-x-hidden">
        {cards?.map((card, index) => (
          <div key={index} className="sticky top-0 py-[7%] min-h-[70vh] z-[1] overflow-x-hidden">
            <div
              className={`w-full h-full flex items-center  justify-center overflow-x-hidden p-8 max-sm:px-1 rounded-none bg-[#f8f7f7] dark:bg-[#030711]`}
            >
              {card.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
