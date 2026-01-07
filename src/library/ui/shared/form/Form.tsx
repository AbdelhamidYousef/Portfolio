import type { FormHTMLAttributes, ReactNode } from 'react';

interface FormProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  children: ReactNode;
  onSubmit?: () => void;
  className?: string;
}

/**
 * Form wrapper with consistent styling and spacing
 * Automatically prevents default form submission
 *
 * @example
 * <Form onSubmit={handleSubmit}>
 *   <FormField>
 *     <Label htmlFor="email">Email</Label>
 *     <Input id="email" type="email" />
 *   </FormField>
 *   <Button type="submit">Submit</Button>
 * </Form>
 */
export const Form = ({
  children,
  onSubmit,
  className = '',
  ...props
}: FormProps) => (
  <form
    className={`space-y-6 ${className}`}
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit?.();
    }}
    {...props}
  >
    {children}
  </form>
);
