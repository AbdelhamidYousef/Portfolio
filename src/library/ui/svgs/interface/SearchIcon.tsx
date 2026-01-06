interface SearchIconProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const SearchIcon = ({
  className = '',
  weight = 'regular',
}: SearchIconProps) => (
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
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
