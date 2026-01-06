interface DownloadArrowProps {
  className?: string;
  weight?: 'light' | 'regular' | 'bold';
}

const strokeWidths = {
  light: 1.5,
  regular: 2,
  bold: 3,
};

export const DownloadArrow = ({
  className = '',
  weight = 'regular',
}: DownloadArrowProps) => (
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
      d="M12 4v12m0 0l-5-5m5 5l5-5M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
    />
  </svg>
);
