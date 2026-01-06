interface UserIconProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const UserIcon = ({
  className = '',
  weight = 'regular',
}: UserIconProps) => (
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
      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
    />
    <circle
      cx="12"
      cy="7"
      r="4"
      strokeWidth={strokeWidths[weight]}
    />
  </svg>
);

