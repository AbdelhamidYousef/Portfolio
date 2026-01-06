interface ViteProps {
  className?: string;
}

export const Vite = ({ className = '' }: ViteProps) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="url(#vite-gradient-a)"
      d="m21.808 4.06-9.373 16.804a.498.498 0 0 1-.875-.004L1.898 4.058c-.21-.38.1-.838.527-.778l9.535 1.344a.5.5 0 0 0 .138 0l9.185-1.342c.425-.062.737.39.525.778Z"
    />
    <path
      fill="url(#vite-gradient-b)"
      d="m15.113.036-6.89 1.362a.25.25 0 0 0-.203.22l-.427 7.354c-.015.25.224.436.467.364l2.01-.6a.25.25 0 0 1 .31.283l-.596 2.925a.25.25 0 0 0 .327.286l1.24-.39a.25.25 0 0 1 .327.286l-.948 4.66c-.053.258.274.396.434.184l.107-.14 5.928-11.178a.25.25 0 0 0-.251-.365l-2.145.378a.25.25 0 0 1-.283-.318l1.337-4.965a.25.25 0 0 0-.284-.318l-.46.082Z"
    />
    <defs>
      <linearGradient
        id="vite-gradient-a"
        x1="1.537"
        x2="13.881"
        y1="2.069"
        y2="17.57"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient
        id="vite-gradient-b"
        x1="9.95"
        x2="12.072"
        y1=".282"
        y2="14.959"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFEA83" />
        <stop offset=".083" stopColor="#FFDD35" />
        <stop offset="1" stopColor="#FFA800" />
      </linearGradient>
    </defs>
  </svg>
);
