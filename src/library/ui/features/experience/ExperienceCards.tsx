import { AnimateOnScroll } from '@/library/ui/shared';
import type { WorkExperience } from '@/content/experience';

interface ExperienceCardsProps {
  data: WorkExperience[];
}

const ExperienceCard = ({ job }: { job: WorkExperience }) => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
      <div>
        <h3 className="font-headlines text-xl font-semibold text-slate-800 dark:text-white">
          {job.title}
        </h3>
        <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
          {job.company}
        </p>
      </div>
      <div className="text-sm text-slate-500 dark:text-slate-400 sm:text-right shrink-0">
        <p>{job.period}</p>
        <p>{job.location}</p>
      </div>
    </div>

    {/* Skills */}
    {job.skills && job.skills.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-gray-100 dark:border-slate-700">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
          >
            {skill}
          </span>
        ))}
      </div>
    )}

    {/* Responsibilities */}
    <ul className="space-y-3">
      {job.responsibilities.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-slate-600 dark:text-slate-300"
        >
          <span className="mt-1.5 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
          <span className="text-sm sm:text-base">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ExperienceCards = ({ data }: ExperienceCardsProps) => (
  <div className="max-w-5xl mx-auto grid gap-8">
    {data.map((job, index) => (
      <AnimateOnScroll key={job.id} animation="slide-up-md" delay={index * 150}>
        <ExperienceCard job={job} />
      </AnimateOnScroll>
    ))}
  </div>
);
