import { useEffect, useState } from 'react';

interface ProgressCircleItemProps {
  /** Label displayed in the center */
  label: string;
  /** Target percentage (0-100) */
  percentage: number;
  /** Circle radius in pixels */
  radius?: number;
  /** Progress bar color */
  color?: string;
  /** Stroke width */
  strokeWidth?: number;
  /** Animation duration in ms */
  duration?: number;
}

/**
 * Animated circular progress indicator
 *
 * @example
 * <ProgressCircleItem label="React" percentage={90} />
 * <ProgressCircleItem label="TypeScript" percentage={85} color="#3178c6" />
 */
export const ProgressCircleItem = ({
  label,
  percentage = 0,
  radius = 60,
  color = '#eb7647',
  strokeWidth = 2,
  duration = 2000,
}: ProgressCircleItemProps) => {
  const [progress, setProgress] = useState(0);

  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - progress) / 100) * circumference;
  const size = (radius + strokeWidth) * 2;

  useEffect(() => {
    if (percentage <= 0) return;

    const stepTime = duration / percentage;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= percentage) {
          clearInterval(interval);
          return percentage;
        }
        return prev + 1;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [percentage, duration]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="-rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`${color}15`}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-100 ease-out"
        />
      </svg>

      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={`
            ${label.includes(' ') ? 'text-sm' : 'text-base'}
            font-bold text-slate-600 dark:text-slate-200 text-center leading-tight
          `}
        >
          {label}
        </span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {progress}%
        </span>
      </div>
    </div>
  );
};
