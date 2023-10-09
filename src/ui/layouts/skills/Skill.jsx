import Proptypes from "prop-types";
import { useEffect, useState } from "react";

const Skill = ({
  name,
  percentage,
  circleRadius = 60,
  barColor = "#eb7647",
  barWidth = 2,
}) => {
  const [progress, setProgress] = useState(0);

  const circumference = 2 * Math.PI * circleRadius; // The total length of the bar
  const cutLength = (1 - progress / 100) * circumference; // The length of bar that should be empty

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 1;

        if (nextProgress >= percentage) clearInterval(interval);

        return nextProgress;
      });
    }, 2000 / percentage);

    return () => clearInterval(interval);
  }, [percentage]);

  return (
    <div
      className="relative"
      style={{
        width: `${circleRadius / 7}rem`,
        height: `${circleRadius / 7}rem`,
      }}
    >
      <svg width="100%" height="100%">
        {/* Empty Bar */}
        <circle
          cx="50%"
          cy="50%"
          r={circleRadius}
          fill="none"
          stroke={`${barColor}10`}
          strokeWidth={barWidth}
        />

        {/* Filled Bar */}
        <circle
          cx="50%"
          cy="50%"
          r={circleRadius}
          fill="none"
          stroke={barColor}
          strokeWidth={barWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={cutLength}
          className="-rotate-90 origin-center"
        />
      </svg>

      {/* Text */}
      <div className="absolute inset-0 grid place-content-center text-center">
        <span className="text-lg font-bold text-slate-600">{name}</span>
        <span className="text-sm font-medium text-slate-600">{progress}%</span>
      </div>
    </div>
  );
};

Skill.propTypes = {
  name: Proptypes.string.isRequired,
  percentage: Proptypes.number.isRequired,
  circleRadius: Proptypes.number,
  barColor: Proptypes.string,
  barWidth: Proptypes.number,
};

export default Skill;
