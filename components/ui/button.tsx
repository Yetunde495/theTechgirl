import React from "react";
import { cn } from "@/lib/utils"; // adjust the path based on your project

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
}

const baseClasses =
  "group relative inline-flex py-2.5 shadow-xl hover:-translate-y-0.5 transition duration-200  items-center justify-center rounded-lg px-3 sm:px-6 font-medium transition-colors";

const variantClasses: Record<ButtonVariant, string> = {
  secondary: "bg-gradient-to-br from-gray-800 dark:from-white  dark:to-gray-100 dark:text-black to-black shadow-gray-700/50 text-neutral-200 hover:bg-neutral-800",
  primary: " bg-primary shadow-[#713cbc]/40 text-white hover:bg-opacity-90",
  ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  icon,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <div className="ml-1 -rotate-45 transition-all duration-200 group-hover:rotate-0">
          {icon}
        </div>
      )}
    </button>
  );
};
