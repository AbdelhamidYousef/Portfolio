import { motion } from 'framer-motion';
import { fadeUp, withStagger } from '@/library/framer-motion';
import type { WorkExperience } from '@/content/experience';

interface ExperienceMinimalProps {
  data: WorkExperience[];
}

const MinimalEntry = ({ job }: { job: WorkExperience }) => (
  <div className="group py-8 border-b border-gray-200 dark:border-slate-700 last:border-0">
    {/* Top row: Title & Period */}
    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
      <h3 className="font-headlines text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {job.title}
      </h3>
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 shrink-0">
        {job.period}
      </span>
    </div>

    {/* Company & Location */}
    <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
      {job.company}
      <span className="text-slate-400 dark:text-slate-500">
        {' '}
        — {job.location}
      </span>
    </p>

    {/* Responsibilities (condensed) */}
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
      {job.responsibilities.slice(0, 4).map((item, index) => (
        <li
          key={index}
          className="text-sm text-slate-600 dark:text-slate-400 before:content-['→'] before:mr-2 before:text-primary-500"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const ExperienceMinimal = ({ data }: ExperienceMinimalProps) => (
  <div className="max-w-4xl mx-auto">
    {data.map((job, index) => (
      <motion.div key={job.id} {...withStagger(fadeUp, index)}>
        <MinimalEntry job={job} />
      </motion.div>
    ))}
  </div>
);
