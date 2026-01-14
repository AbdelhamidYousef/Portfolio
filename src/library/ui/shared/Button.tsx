import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

type AnchorProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
  };

type Props = ButtonProps | AnchorProps;

const variantStyles: Record<Variant, string> = {
  primary: `
    bg-primary-600 text-white
    hover:bg-primary-700
    focus:ring-primary-500
    dark:bg-primary-500 dark:hover:bg-primary-600
  `,
  secondary: `
    bg-slate-600 text-white
    hover:bg-slate-700
    focus:ring-slate-500
    dark:bg-slate-500 dark:hover:bg-slate-600
  `,
  outline: `
    bg-transparent border-2 border-slate-300 text-slate-700
    hover:bg-slate-100 hover:border-slate-400
    focus:ring-slate-400
    dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:border-slate-500
  `,
  ghost: `
    bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800
    text-slate-600 dark:text-slate-300 dark:hover:text-slate-900
    focus:ring-slate-400
  `,
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

/**
 * Versatile button component with variants and sizes
 *
 * @example
 * <Button variant="primary">Submit</Button>
 * <Button variant="outline" size="lg">Learn More</Button>
 * <Button as="a" href="/about" variant="ghost">About</Button>
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: Props) => {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg
    outline-none focus:ring-2 focus:ring-offset-2
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
    dark:focus:ring-offset-gray-900
  `;

  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `;

  if (props.as === 'a') {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...anchorProps } = props as AnchorProps;
    return (
      <a className={combinedStyles} {...anchorProps}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...buttonProps } = props as ButtonProps;
  return (
    <button className={combinedStyles} {...buttonProps}>
      {children}
    </button>
  );
};
