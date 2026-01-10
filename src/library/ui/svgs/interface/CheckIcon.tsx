interface CheckIconProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const CheckIcon = ({
  className = '',
  weight = 'regular',
}: CheckIconProps) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidths[weight]}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
