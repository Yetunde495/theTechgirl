"use client";
import { createContext, useContext, useEffect, useRef } from "react";
import {
  ArrowUpLeftSquareIcon,
  FileText,
  Github,
  Linkedin,
  Loader,
  Mail,
  MessageCircle,
  MessageSquareCode,
  MousePointerClickIcon,
  Star,
  Twitter,
  User,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  DynamicContainer,
  DynamicDescription,
  DynamicDiv,
  DynamicIsland,
  DynamicTitle,
  SizePresets,
  useDynamicIslandSize,
  useScheduledAnimations,
} from "@/components/ui/dynamic-island";
import { Glass, InterFont } from "@/app/fonts";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Inter } from "next/font/google";

export const DynamicAction = () => {
  const { state: blobState, setSize } = useDynamicIslandSize();
  const blobStates: SizePresets[] = [
    "compact",
    "large",
    "tall",
    "long",
    "medium",
  ];
  const cycleBlobStates = () => {
    const currentIndex = blobStates.indexOf(blobState.size);
    const nextIndex = (currentIndex + 1) % blobStates.length;
    setSize(blobStates[nextIndex]);
  };
  useScheduledAnimations([
    { size: "compact", delay: 1000 },
    { size: "large", delay: 1200 },
    { size: "tall", delay: 1600 },
    { size: "long", delay: 1800 },
    { size: "medium", delay: 2200 },
  ]);
  // Provide dynamic detail in such a beautiful small place :)
  const renderCompactState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative w-full flex items-center">
        <DynamicDescription className="absolute left-4  my-auto text-lg font-medium tracking-tighter text-white ">
          <MessageCircle className=" h-5 w-5 fill-cyan-400 text-cyan-400" />
        </DynamicDescription>
        <DynamicDescription className="absolute text-white right-4  my-auto text-lg font-bold tracking-tighter ">
          newcult.co
        </DynamicDescription>
      </div>
    </DynamicContainer>
  );
  // Great for call to action, popping up in users face :)
  const renderLargeState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative  flex w-full items-center justify-between gap-6 px-4">
        <Loader className="animate-spin h-12 w-12  text-yellow-300" />
        <DynamicTitle className="my-auto text-2xl font-black tracking-tighter text-white ">
          loading
        </DynamicTitle>
      </div>
    </DynamicContainer>
  );
  // Great for user onboarding, forms, etc
  const renderTallState = () => (
    <DynamicContainer className="  flex flex-col mt-6 w-full items-start  gap-1 px-8 font-semibold">
      <DynamicDescription className="bg-cyan-300 rounded-2xl tracking-tight leading-5  p-2">
        The Cult of Pythagoras
      </DynamicDescription>
      <DynamicDescription className="bg-cyan-300 rounded-2xl tracking-tight leading-5  p-2 text-left">
        Music of the Spheres, an idea that celestial bodies produce a form of
        music through their movements
      </DynamicDescription>
      <DynamicTitle className=" text-4xl font-black tracking-tighter text-cyan-100 ">
        any cool cults?
      </DynamicTitle>
    </DynamicContainer>
  );
  const renderLongState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <DynamicDiv className="relative  flex w-full items-center justify-between gap-6 px-4">
        <div>
          <Waves className=" text-cyan-400 h-8 w-8" />
        </div>
        <DynamicTitle className="my-auto text-xl font-black tracking-tighter text-white ">
          Supercalifragilisticexpialid
        </DynamicTitle>
      </DynamicDiv>
    </DynamicContainer>
  );
  const renderMediumState = () => (
    <DynamicContainer className="flex flex-col justify-between px-2 pt-4 text-left text-white h-full">
      <DynamicTitle className="text-2xl pl-3 font-black tracking-tighter">
        Reincarnation, welcome back
      </DynamicTitle>
      <DynamicDescription className="leading-5 text-neutral-500 pl-3">
        Good for small tasks or call outs
      </DynamicDescription>
      <DynamicDiv className="flex flex-col mt-auto space-y-1 mb-2 bg-neutral-700 p-2 rounded-b-2xl">
        <button>
          <Mail className="mr-2 h-4 w-4 fill-cyan-400 text-neutral-900" /> Login
          with email
        </button>
        <button className="mt-1 ">
          <User className="mr-2 h-4 w-4 fill-cyan-400 text-cyan-400" /> Join the
          cult now
        </button>
      </DynamicDiv>
    </DynamicContainer>
  );
  // Render function for other states
  const renderOtherStates = () => (
    <div className="flex items-center justify-center h-full w-full">
      <div>
        <ArrowUpLeftSquareIcon className="text-white" />
      </div>
      <p className="text-white">cycle states</p>
    </div>
  );
  // Main render logic based on size
  function renderState() {
    switch (blobState.size) {
      case "compact":
        return renderCompactState();
      case "large":
        return renderLargeState();
      case "tall":
        return renderTallState();
      case "medium":
        return renderMediumState();
      case "long":
        return renderLongState();
      // Optionally add cases for other states as necessary
      default:
        return renderOtherStates();
    }
  }
  return (
    <div className=" h-full">
      <div className="flex flex-col gap-4  h-full">
        <div className="absolute top-12 left-1">
          {/* {!blobState.isAnimating ? ( */}
          <button
            onClick={cycleBlobStates}
            disabled={blobState.isAnimating}
            className="mt-4 p-2 border rounded-md max-w-[200px] "
          >
            Click
            <MousePointerClickIcon className="ml-2 h-4 w-4" />
          </button>
          {/* ) : null} */}
        </div>

        <DynamicIsland id="dynamic-blob">{renderState()}</DynamicIsland>
      </div>
    </div>
  );
};
export function AnimatedProfile() {
  const { state: blobState, setSize } = useDynamicIslandSize();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const blobStates: SizePresets[] = ["compact", "large", "medium"];
  const cycleBlobStates = () => {
    const currentIndex = blobStates.indexOf(blobState.size);
    const nextIndex = (currentIndex + 1) % blobStates.length;
    setSize(blobStates[nextIndex]);
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;

        if (isVisible) {
          // start auto loop
          //      const interval = setInterval(() => {
          //   cycleBlobStates();
          // }, 15000); // ← adjust delay per step
          // return () => clearInterval(interval);
        } else {
          // stop loop when not visible
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      { threshold: 0.5 } // trigger when 50% in view
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [blobState.size]);
  useScheduledAnimations([
    { size: "compact", delay: 1200 },
    { size: "large", delay: 1600 },
    { size: "medium", delay: 2200 },
  ]);
  // Provide dynamic detail in such a beautiful small place :)
  const renderCompactState = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative w-full flex items-center">
        <DynamicDescription
          className={`absolute text-white left-4 ${Glass.className}  my-auto text-2xl font-bold tracking-tighter `}
        >
          theTechgirl
        </DynamicDescription>
        <DynamicDescription className="absolute right-4  my-auto text-lg font-medium tracking-tighter text-white ">
          <span className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
            <Github className=" h-5 w-5 animate-pulse text-[#713cbc]" />
          </span>
        </DynamicDescription>
      </div>
    </DynamicContainer>
  );
  // Great for call to action, popping up in users face :)
  const renderLargeState = () => (
    <DynamicContainer className="flex justify-center items-center h-full w-full">
      <div className="relative  flex w-full items-center justify-center gap-2">
        {/* <div className="">
          <DotLottieReact
            src="https://lottie.host/95f83961-5916-46d8-a611-5a6d3371877c/Wkron6xWQV.lottie"
            loop
            autoplay
            className="h-full  w-full "
          />
        </div> */}
        <DynamicDescription className="my-auto tracking-tighter text-white ">
          <MessageCircle className=" h-7 w-7 fill-white text-[#713cbc]" />
        </DynamicDescription>
        <DynamicDescription
          className={` text-slate-100 ${InterFont.className} text-center my-auto text-2xl font-semibold tracking-tighter `}
        >
          Contact me now!
        </DynamicDescription>
      </div>
    </DynamicContainer>
  );
  // Great for user onboarding, forms, etc
  const renderTallState = () => (
    <DynamicContainer className="  flex flex-col mt-6 w-full items-start  gap-1 px-6 font-semibold">
      <DynamicDescription className="bg-white text-left rounded-2xl tracking-tight leading-5  p-2">
        translating ideas into functional & user-friendly apps.
      </DynamicDescription>
      {/* <DynamicDescription className="bg-black text-white font-medium rounded-2xl tracking-tight leading-5  p-2 text-left">
        it's about seamless solutions that carry design intent, user flow, and
        technical strength together.
      </DynamicDescription> */}
      <DynamicDiv>
        <div className="">
          <DotLottieReact
            src="https://lottie.host/95f83961-5916-46d8-a611-5a6d3371877c/Wkron6xWQV.lottie"
            loop
            autoplay
            className="h-full  w-full "
          />
        </div>
      </DynamicDiv>
      {/* <DynamicTitle className=" text-4xl font-black tracking-tighter text-cyan-100 ">
        awesome right?
      </DynamicTitle> */}
    </DynamicContainer>
  );

  const renderMediumState = () => (
    <DynamicContainer className="flex flex-col justify-between p-4 bg-[#713cbc] rounded-[28px] text-left text-white h-full">
      <DynamicDiv className="flex items-start gap-2">
        <div className="h-12 w-12  bg-gradient-to-tr from-slate-200 via-neutral-100 to-slate-100 p-[2px] rounded-lg">
          <img
            src="/images/personal-img.jpg"
            className="rounded-lg object-cover h-full w-full"
          />
        </div>

        <div>
          <h4 className="text-base font-semibold">Yetunde Morenikeji</h4>
          <p className="flex gap-2 items-center text-sm">
            <span>Frontend Engineer</span>
            <span>•</span>
            <span>Nigeria</span>
          </p>
        </div>
      </DynamicDiv>
      <DynamicDiv className=" tracking-tight text-sm text-slate-50">
        <p>
          {" "}
          Expert Front-end Developer with 3 years of experience in designing,
          developing and maintaining high-performing, and user-focused web
          applications.
          {/* .   I see frontend as the bridge between design, code, and people.
It’s not only about writing clean interfaces but creating products that serve real needs.
That’s the value I bring to every project I work on.*/}
        </p>
      </DynamicDiv>
      <DynamicDiv>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className=""
        >
          <div className="grid grid-cols-3 divide-x-2 divide-slate-300/30 text-sm gap-1 place-items-center text-center">
            <div className="flex justify-center flex-col items-center w-full">
              <div className="text-slate-100">Projects</div>
              <div className="font-semibold">30</div>
            </div>
            <div className="flex justify-center flex-col items-center w-full">
              <div className="text-slate-100">Clients</div>
              <div className="font-semibold">10+</div>
            </div>

            <div className="flex justify-center flex-col items-center w-full">
              <p className="text-slate-100">Rating</p>
              <p className="font-semibold flex items-center">
                <Star
                  size={14}
                  className="mr-1 fill-yellow-400 text-yellow-400"
                />{" "}
                4.8
              </p>
            </div>
          </div>
        </motion.div>
      </DynamicDiv>
      <DynamicDiv className=" gap-3">
        <button className="bg-white text-black w-full px-4 py-2 rounded-lg hover:bg-opacity-95 ">
          Download CV
        </button>
      </DynamicDiv>
    </DynamicContainer>
  );
  // Render function for other states
  const renderOtherStates = () => (
    <DynamicContainer className="flex items-center justify-center h-full w-full">
      <div className="relative w-full flex items-center">
        <DynamicDescription
          className={`absolute text-white left-4 ${Glass.className}  my-auto text-2xl font-bold tracking-tighter `}
        >
          theTechgirl
        </DynamicDescription>
        <DynamicDescription className="absolute right-4  my-auto text-lg font-medium tracking-tighter text-white ">
          <span className="h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
            <Github className=" h-5 w-5 animate-pulse text-[#713cbc]" />
          </span>
        </DynamicDescription>
      </div>
    </DynamicContainer>
  );
  // Main render logic based on size
  function renderState() {
    switch (blobState.size) {
      case "compact":
        return renderCompactState();
      case "medium":
        return renderMediumState();
      case "large":
        return renderLargeState();
      // Optionally add cases for other states as necessary
      default:
        return renderOtherStates();
    }
  }
  return (
    <div ref={containerRef} className="h-full relative  w-full">
      <div className="w-full max-w-[400px] bg-slate-50 dark:bg-[#713cbc] shadow-xl border dark:border-none dark:border-t border-slate-200 flex items-center justify-between gap-1 px-4 py-1.5 rounded-xl mb-3">
        <button
          onClick={cycleBlobStates}
          disabled={blobState.isAnimating}
          className="hover:scale-105 dark:text-white duration-150 rounded-md flex justify-center items-center "
        >
          <Github className="" />
        </button>
        <button
          onClick={cycleBlobStates}
          disabled={blobState.isAnimating}
          className="hover:scale-105 dark:text-white duration-150  flex justify-center items-center "
        >
          <Linkedin className="" />
        </button>
        <button
          onClick={cycleBlobStates}
          disabled={blobState.isAnimating}
          className=" dark:text-white hover:scale-105 duration-150 rounded-md flex justify-center items-center "
        >
          <Twitter className="" />
        </button>
        

        <button
          onClick={cycleBlobStates}
          disabled={blobState.isAnimating}
          className=" bg-[#713cbc] text-white p-2 border dark:border-none rounded-md flex justify-center items-center gap-2 max-w-[200px] "
        >
          <Mail className="h-5 w-5" />
        </button>
      </div>

      <DynamicIsland id="dynamic-blob">{renderState()}</DynamicIsland>
    </div>
  );
}
const FadeInStaggerContext = createContext(false);
const viewport = { once: true, margin: "0px 0px -200px" };

export function FadeIn(props: any) {
  let shouldReduceMotion = useReducedMotion();
  let isInStaggerGroup = useContext(FadeInStaggerContext);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport,
          })}
      {...props}
    />
  );
}
export function FadeInStagger({ faster = false, ...props }) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
}
