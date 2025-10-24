"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sans } from "@/app/fonts";
import Input from "./formUI/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import z from "zod";
import TextArea from "./formUI/TextArea";
import { Button } from "./ui/button";
import { DynamicIslandProvider } from "./ui/dynamic-island";
import { AnimatedProfile } from "./animated-card";

export const schema = z.object({
  name: z.string().min(3, "Your name is required"),
  email: z.string().min(6, "Email is Required"),
  message: z.string().min(10, "This field is required"),
});

export type feedbackData = {
  name: string;
  email: string;
  message: string;
};
const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<"success" | "failure" | "initial">(
    "initial"
  );
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<feedbackData>({
    resolver: zodResolver(schema),
  });

  const handleMailClick = () => {
    window.location.href = "mailto:morenikejiy48@gmail.com";
  };

  const onSubmit = async (data: feedbackData) => {
    setIsLoading(true);
    setShowModal(false);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("message", data.message);

      const response = await fetch("https://formspree.io/f/xkgqdrez", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setResult("success");
        reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      console.error(error);
      setResult("failure");
    } finally {
      setIsLoading(false);
      setShowModal(true);
    }
  };

  // Auto-close modal after 10 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);
  return (
    <section id="contact" className="py-24 container mx-auto">
      <div className=" pt-15 px-4 md:px-8 lg:px-10 text-left">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-purple-950/5 dark:bg-purple-950/30 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-1.5"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Get in touch
        </motion.div>
        <h2
          className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-6 max-w-3xl`}
        >
          Let's build a product that grows your business.
        </h2>
        <p className="text-muted-foreground sm:text-lg max-w-3xl">
          A well-built product is not just design and code; it's a solution that
          attracts users, keep them engaged and turns them into loyal customers.
          I create seamless solutions that help your ideas work for both users
          and businesses.{" "}
        </p>
      </div>
      <div className="w-full h-full grid lg:grid-cols-2 gap-9 place-items-center grid-cols-1  py-[5%] px-[3%]">
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="py-4">
            <div>
              <div>
                <div className="grid  grid-cols-1 gap-y-7 w-full">
                  <div className="flex flex-col md:flex-row gap-7 w-full">
                    <Input
                      placeholder="Full Name"
                      desc="Enter your full name or company name"
                      {...register("name")}
                      error={errors.name?.message}
                      fullWidth
                    />
                    <Input
                      placeholder="Email"
                      desc="Enter your email"
                      type="email"
                      {...register("email")}
                      pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                      error={errors.email?.message}
                      fullWidth
                    />
                  </div>

                  <div className="col-span-2">
                    <TextArea
                      placeholder="Message"
                      desc="Tell me more about your needs or ideas"
                      className=""
                      {...register("message")}
                      error={errors.message?.message}
                      fullWidth
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="primary"
                    onClick={() => {}}
                    className="w-full"
                  >
                    {isLoading ? "Loading..." : "Send Message"}
                  </Button>
                </div>

                <div className="pt-6 text-center text-sm">
                  <h6>
                    {" "}
                    Or send me an email at:{" "}
                    <span
                      onClick={handleMailClick}
                      className="text-neutral-700 cursor-pointer underline hover:text-primary dark:text-neutral-300 text-sm"
                    >
                      morenikejiy48@gmail.com
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full flex justify-center items-center">
          <DynamicIslandProvider initialSize={"default"}>
            <div>
              <AnimatedProfile />
            </div>
          </DynamicIslandProvider>
        </div>
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className={`bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 max-w-sm mx-auto text-center`}
            >
              {result === "success" ? (
                <>
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-semibold text-green-600 mb-2"
                  >
                    Message Sent!
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thanks for reaching out. I’ll get back to you as soon as
                    possible.
                  </p>
                </>
              ) : (
                <>
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-semibold text-red-600 mb-2"
                  >
                    Something went wrong 😢
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Please try again or reach me directly via email.
                  </p>
                </>
              )}
              <p className="text-xs mt-4 text-gray-400">
                This message will close automatically in 10 seconds.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
