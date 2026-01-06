interface PlusIconProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const PlusIcon = ({
  className = '',
  weight = 'regular',
}: PlusIconProps) => (
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
      d="M12 4v16m8-8H4"
    />
  </svg>
);

