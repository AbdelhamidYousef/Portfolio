interface StyledComponentsProps {
  className?: string;
}

export const StyledComponents = ({ className = '' }: StyledComponentsProps) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 -165 276 260"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text fill="#504b4b" fontSize="100">
      <tspan>{`< 💅>`}</tspan>
    </text>
  </svg>
);

