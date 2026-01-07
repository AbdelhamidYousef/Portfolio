import type { ReactNode } from 'react';

interface FormContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Styled container for forms with background, border, and padding
 *
 * @example
 * <FormContainer>
 *   <Form onSubmit={handleSubmit}>
 *     ...
 *   </Form>
 * </FormContainer>
 */
export const FormContainer = ({
  children,
  className = '',
}: FormContainerProps) => (
  <div
    className={`
      ml-1 px-4 xs:px-8 sm:px-12 py-8 xs:py-10 sm:py-14
      xs:bg-gray-200 dark:xs:bg-slate-800
      xs:rounded-2xl xs:shadow-lg
      grid gap-y-8
      ${className}
    `}
  >
    {children}
  </div>
);
