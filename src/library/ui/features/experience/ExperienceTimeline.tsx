import type { WorkExperience } from '@/content/experience';

interface ExperienceTimelineProps {
  data: WorkExperience[];
}

const TimelineCard = ({ job }: { job: WorkExperience }) => (
  <div className="relative pl-8 pb-6 last:pb-0 border-l-2 border-primary-200 dark:border-primary-800">
    {/* Timeline dot */}
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400" />

    {/* Header */}
    <div className="mb-4">
      <h3 className="font-headlines text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white">
        {job.title}
      </h3>
      <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
        {job.company}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        {job.period} • {job.location}
      </p>
    </div>

    {/* Skills */}
    {job.skills && job.skills.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    )}

    {/* Responsibilities */}
    <ul className="space-y-2">
      {job.responsibilities.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ExperienceTimeline = ({ data }: ExperienceTimelineProps) => (
  <div className="max-w-4xl mx-auto">
    {data.map((job) => (
      <TimelineCard key={job.id} job={job} />
    ))}
  </div>
);
