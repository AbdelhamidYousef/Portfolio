interface CopyIconProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const CopyIcon = ({
  className = '',
  weight = 'regular',
}: CopyIconProps) => (
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
      d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-2M8 4v12a2 2 0 002 2h10M8 4a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-2"
    />
  </svg>
);

