"use client";
import { motion } from "framer-motion";
import { Sans } from "@/app/fonts";
import Input from "./formUI/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import z from "zod";
import TextArea from "./formUI/TextArea";
import { Button } from "./ui/button";
import { DynamicIslandProvider } from "./ui/dynamic-island";
import { AnimatedProfile } from "./animated-card";
// import InputSelect from "./formUI/input-with-select";

export const schema = z.object({
  name: z.string().min(3, "Your name is required"),
  email: z.string().min(6, "Email is Required"),
  message: z.string().min(10, "This field is required"),
  budget: z.string().optional()
});

export type feedbackData = {
  name: string;
  email: string;
  message: string;
  budget?: string;
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
        <p className="text-muted-foreground text-lg max-w-3xl">
          A well-built product is not just design and code; it's a soluton that
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
                <div className="grid  grid-cols-1 gap-7 w-full">
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
                    {/* <InputSelect
                      label="Amount"
                      placeholder="Enter amount"
                      type="number"
                      fullWidth
                      // register input field
                      {...register("budget", {
                        required: "Amount is required",
                      })}
                      error={errors.budget?.message}
                      // register select field separately
                      // selectRegister={register("currency", { required: true })}
                      options={[
                        { value: "$", label: "USD $" },
                        { value: "₦", label: "NGN ₦" },
                      ]}
                    /> */}
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
        <div>
          <DynamicIslandProvider initialSize={"default"}>
            <div>
              <AnimatedProfile />
            </div>
          </DynamicIslandProvider>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
