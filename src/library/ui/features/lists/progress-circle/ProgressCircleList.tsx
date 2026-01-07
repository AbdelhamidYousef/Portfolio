import { ProgressCircleItem } from './ProgressCircleItem';

export interface ProgressCircleItem {
  id: string | number;
  label: string;
  percentage: number;
  color?: string;
}

interface ProgressCircleListProps {
  data: ProgressCircleItem[];
  /** Container classes */
  containerClasses?: string;
  /** Shared radius for all circles */
  radius?: number;
  /** Shared stroke width */
  strokeWidth?: number;
  /** Animation duration in ms */
  duration?: number;
}

/**
 * Renders a list of progress circles
 *
 * @example
 * <ProgressCircleList
 *   data={[
 *     { id: 1, label: 'React', percentage: 90 },
 *     { id: 2, label: 'TypeScript', percentage: 85, color: '#3178c6' },
 *   ]}
 *   containerClasses="gap-8"
 * />
 */
export const ProgressCircleList = ({
  data,
  containerClasses = '',
  radius,
  strokeWidth,
  duration,
}: ProgressCircleListProps) => (
  <div className={`flex flex-wrap items-center gap-6 ${containerClasses}`}>
    {data.map((item) => (
      <ProgressCircleItem
        key={item.id}
        label={item.label}
        percentage={item.percentage}
        color={item.color}
        radius={radius}
        strokeWidth={strokeWidth}
        duration={duration}
      />
    ))}
  </div>
);
