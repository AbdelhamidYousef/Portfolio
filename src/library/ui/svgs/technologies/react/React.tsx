interface ReactIconProps {
  className?: string;
}

export const ReactIcon = ({ className = '' }: ReactIconProps) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="-11.5 -10.23174 23 20.46348"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="0" cy="0" r="2.05" fill="#16addf" />
    <g stroke="#16addf" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

