import type { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper for form field with consistent spacing
 *
 * @example
 * <FormField>
 *   <Label htmlFor="email">Email</Label>
 *   <Input id="email" type="email" placeholder="you@example.com" />
 * </FormField>
 */
export const FormField = ({ children, className = '' }: FormFieldProps) => (
  <div className={`grid gap-y-3 ${className}`}>{children}</div>
);
