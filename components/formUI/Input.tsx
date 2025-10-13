import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  desc?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, desc, icon, fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn('', fullWidth && 'w-full')}>
        {label && (
          <label
            className="mb-[0.4rem] block text-black dark:text-gray-200 font-medium"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <input
            className={cn(
              'px-4 py-3 bg-white dark:bg-[#101828] dark:border-gray-700 border border-[#d0d5dd] rounded-md text-sm placeholder-zinc-400',
              'focus:outline-none focus:ring focus:ring-[#713cbc]/30 focus:border-primary',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              icon && 'pl-10',
              error && 'border-danger focus:ring-red-50',
              fullWidth && 'w-full',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
         {desc && (
          <label
            className="mt-[0.2rem] text-xs block text-slate-500 dark:text-gray-200 px-0.5"
            htmlFor={props.id}
          >
            {desc}
          </label>
        )}
        {error && <p className="text-danger text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;