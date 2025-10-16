"use client";
import { FlowingLogos } from "./ui/flowing-logo";
import {
  Framer,
  Git,
  Javascript,
  NextLogo,
  ReactLogo,
  Tailwind,
  Typescript,
} from "./ui/logos";

export function FlowingLogosDemo() {
  return (
    <FlowingLogos
      data={[
        { image: "", name: "Next.js", svg: NextLogo },
        { image: "", name: "React", svg: ReactLogo },
        { image: "", name: "JavaScript", svg: Javascript },
        { image: "", name: "TailwindCSS", svg: Tailwind },
        { image: "", name: "Framer", svg: Framer },
        { image: "", name: "Typescript", svg: Typescript },
        { image: "", name: "Git", svg: Git },
        {
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
          name: "GitHub",
        },
      ]}
    />
  );
}
