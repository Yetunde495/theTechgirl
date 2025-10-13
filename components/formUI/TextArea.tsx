import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes } from 'react';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  desc?: string;
  error?: string;
  fullWidth?: boolean;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, label, error, desc, fullWidth = false, ...props }, ref) => {
    return (
      <div className={cn('', fullWidth && 'w-full')}>
        {label && (
          <label
            className="block mb-[0.4rem] font-medium text-black dark:text-gray-200"
            htmlFor={props.id}
          >
            {label}
          </label>
        )}
        <textarea
          className={cn(
            'px-4 py-2 bg-white border border-[#d0d5dd] dark:bg-[#101828] dark:border-gray-700 rounded-md text-sm placeholder-slate-400',
            'focus:outline-none focus:ring focus:ring-[#713cbc]/30 focus:border-primary',
            'disabled:opacity-50 disabled:cursor-not-allowed min-h-[100px]',
            error && 'border-danger focus:ring-red-50',
            fullWidth && 'w-full',
            className
          )}
          ref={ref}
          {...props}
        />
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

TextArea.displayName = 'TextArea';

export default TextArea;