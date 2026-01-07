import type { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const baseStyles = `
  w-full px-0.5 xs:px-6 py-3.5
  bg-inherit border-b-2 border-gray-300
  xs:bg-white xs:rounded-lg
  font-medium text-base sm:text-lg text-slate-800
  placeholder:font-main placeholder:text-base placeholder:text-gray-400
  outline-hidden focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400
  disabled:bg-gray-300 disabled:cursor-not-allowed
  dark:border-slate-600 dark:xs:bg-slate-700 dark:text-white dark:placeholder:text-gray-300
  dark:focus:border-primary-600 dark:xs:focus:ring-primary-600
  dark:disabled:bg-slate-900
`;

const errorStyles = `border-red-500 focus:border-red-500 dark:border-red-400`;

export const Textarea = ({
  className = '',
  error,
  rows = 4,
  ...props
}: TextareaProps) => (
  <textarea
    className={`${baseStyles} ${error ? errorStyles : ''} ${className}`}
    rows={rows}
    {...props}
  />
);
