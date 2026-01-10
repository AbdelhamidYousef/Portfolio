export interface StatsItem {
  readonly label: string;
  readonly value: string;
}

interface StatsListProps {
  stats: readonly StatsItem[];
  className?: string;
}

/**
 * Renders a list of stats/highlights
 *
 * @example
 * <StatsList
 *   stats={[
 *     { label: 'Years Experience', value: '3+' },
 *     { label: 'Projects', value: '20+' },
 *   ]}
 * />
 */
export const StatsList = ({ stats, className = '' }: StatsListProps) => (
  <div
    className={`flex flex-wrap justify-center lg:justify-start gap-8 ${className}`}
  >
    {stats.map((stat) => (
      <div key={stat.label} className="text-center">
        <span className="block font-headlines font-bold text-4xl text-primary-600 dark:text-primary-400">
          {stat.value}
        </span>
        <span className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {stat.label}
        </span>
      </div>
    ))}
  </div>
);
