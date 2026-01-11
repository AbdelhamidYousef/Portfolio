import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, withStagger } from '@/library/framer-motion';
import type { WorkExperience } from '@/content/experience';

interface ExperienceAccordionProps {
  data: WorkExperience[];
}

const AccordionItem = ({
  job,
  isOpen,
  onToggle,
}: {
  job: WorkExperience;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-gray-200 dark:border-slate-700">
    {/* Header (clickable) */}
    <button
      onClick={onToggle}
      className="w-full py-6 flex items-center justify-between gap-4 text-left group"
    >
      <div className="flex-1">
        <h3 className="font-headlines text-lg sm:text-xl font-semibold text-slate-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {job.title}
        </h3>
        <p className="text-primary-600 dark:text-primary-400">
          {job.company}
          <span className="text-slate-400 dark:text-slate-500 text-sm ml-2">
            {job.period} • {job.location}
          </span>
        </p>
      </div>

      {/* Expand icon */}
      <span
        className={`w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        <svg
          className="w-4 h-4 text-slate-600 dark:text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
    </button>

    {/* Content (expandable) */}
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-[1000px] pb-6' : 'max-h-0'
      }`}
    >
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
      <ul className="space-y-2 pl-4">
        {job.responsibilities.map((item, index) => (
          <li
            key={index}
            className="text-slate-600 dark:text-slate-300 before:content-['•'] before:mr-3 before:text-primary-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const ExperienceAccordion = ({ data }: ExperienceAccordionProps) => {
  const [openId, setOpenId] = useState<number | null>(data[0]?.id ?? null);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg">
      {data.map((job, index) => (
        <motion.div key={job.id} {...withStagger(fadeUp, index)}>
          <AccordionItem
            job={job}
            isOpen={openId === job.id}
            onToggle={() => setOpenId(openId === job.id ? null : job.id)}
          />
        </motion.div>
      ))}
    </div>
  );
};
