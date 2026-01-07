import type { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const Label = ({ className = '', children, ...props }: LabelProps) => (
  <label
    className={`
      hidden xs:block font-medium text-base md:text-lg text-center xs:text-left
      dark:text-gray-50
      ${className}
    `}
    {...props}
  >
    {children}
  </label>
);
