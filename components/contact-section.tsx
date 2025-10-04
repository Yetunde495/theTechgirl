"use client";
import { motion } from "framer-motion";
import { Sans } from "@/app/fonts";
import Input from "./formUI/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import z from "zod";
import TextArea from "./formUI/TextArea";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<feedbackData>({
    resolver: zodResolver(schema),
  });

  const handleMailClick = () => {
    window.location.href = "mailto:morenikejiy48@gmail.com";
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);

    try {
      // await sendFeedback(data);
      setResult("success");
      reset();
    } catch (err: any) {
      setResult("failure");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 container mx-auto">
      <section className="flex justify-center items-center w-full px-[3%]">
        <div className="w-full h-full grid lg:gap-9 gap-7 grid-cols-1 place-items-center md:grid-cols-2">
          <div className="py-[9%] px-[4%] w-full h-full">
            <div className=" px-4 md:px-8 lg:px-10 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-purple-950/5 dark:bg-purple-950/30 text-primary font-semibold px-4 py-1.5 rounded-full text-sm mb-1.5"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Contact Me
              </motion.div>
              <h2
                className={`text-3xl md:text-5xl ${Sans.className} font-semibold mb-6`}
              >
                Let's build a product that grows your business.
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl">
                A well-built product is not just design and code; it's a soluton
                that attracts users, keep them engaged and turns them into loyal
                customers. I create seamless solutions that help your ideas work
                for both users and businesses.{" "}
              </p>
              <div>
                <div className="">
                  <DotLottieReact
                    src="https://lottie.host/95f83961-5916-46d8-a611-5a6d3371877c/Wkron6xWQV.lottie"
                    loop
                    autoplay
                    className="h-full  w-full "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full h-full">
            <div className="w-full h-full bg-white  pt-[5%] px-[6%] rounded-[30px] shadow-lg dark:text-primary dark:bg-white/5 backdrop-blur-lg dark:border dark:border-white/10">
              <div className="pb-2">
                <h6 className="text-xl font-semibold lg:text-2xl mb-3">
                  Send us a feedback or contact us
                </h6>
              </div>

              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                  <div>
                    <div>
                      <div className="grid gap-7">
                        <Input
                          label="Name"
                          placeholder="Enter a descriptive title"
                          {...register("name")}
                          error={errors.name?.message}
                          fullWidth
                        />
                        <Input
                          label="Email"
                          placeholder="Enter your email"
                          type="email"
                          {...register("email")}
                          pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                          error={errors.email?.message}
                          fullWidth
                        />

                        <TextArea
                          label="Message"
                          placeholder="Enter your message"
                          {...register("message")}
                          error={errors.message?.message}
                          fullWidth
                        />
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

                      <div className="pt-6 text-center text-xs">
                        <h6>
                          {" "}
                          Or send me an email at:{" "}
                          <span
                            onClick={handleMailClick}
                            className="text-neutral-700 cursor-pointer underline hover:text-primary dark:text-neutral-300 text-xs"
                          >
                            morenikejiy48@gmail.com
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactSection;
