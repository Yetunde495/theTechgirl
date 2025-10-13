import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputSelectProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  options?: { value: string; label: string }[];
  fullWidth?: boolean;
}

const InputSelect = forwardRef<HTMLInputElement, InputSelectProps>(
  ({ className, label, error, icon, options = [], fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn("", fullWidth && "w-full")}>
        {label && (
          <label
            className="mb-[0.4rem] block text-black dark:text-gray-200 font-medium"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}

        <div className="flex gap-2 relative">
          {/* Input */}
          <div className="relative flex-1">
            {icon && (
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {icon}
              </div>
            )}
            <input
              className={cn(
                "px-4 py-2 bg-white dark:bg-[#101828] dark:border-gray-700 border border-[#d0d5dd] rounded-md text-sm placeholder-zinc-400",
                "focus:outline-none focus:ring focus:ring-[#713cbc]/30 focus:border-primary",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                icon && "pl-10",
                error && "border-danger focus:ring-red-50",
                fullWidth && "w-full",
                className
              )}
              ref={ref}
              {...props}
            />
          </div>

          {/* Dropdown */}
          <select
            className={cn(
              "px-3 py-2 border border-[#d0d5dd] dark:border-gray-700 rounded-md text-sm",
              "bg-white dark:bg-[#101828] focus:outline-none focus:ring focus:ring-[#713cbc]/30 focus:border-primary",
              "disabled:opacity-50 disabled:cursor-not-allowed"
            )}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {error && <p className="text-danger text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

InputSelect.displayName = "InputSelect";

export default InputSelect;
