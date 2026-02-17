import type {
  WorkExperience,
  CoreContribution,
  EnterpriseProject,
} from '@/content/experience';

interface ExperienceTimelineProps {
  data: WorkExperience[];
}

const hasNarrativeFormat = (job: WorkExperience): boolean =>
  Boolean(job.intro) ||
  (job.coreTechnicalContributions?.length ?? 0) > 0 ||
  (job.keyEnterpriseProjects?.length ?? 0) > 0;

const ContributionItem = ({ label, description }: CoreContribution) => (
  <li className="flex flex-col gap-1 text-slate-600 dark:text-slate-300">
    <span className="font-semibold text-slate-800 dark:text-slate-100">
      {label}:
    </span>
    <span>{description}</span>
  </li>
);

const ProjectCard = ({ name, subtitle, bullets }: EnterpriseProject) => (
  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 p-4 sm:p-5">
    <h4 className="font-headlines text-lg font-semibold text-slate-800 dark:text-white">
      {name}
    </h4>
    <p className="mb-3 text-sm font-medium text-primary-600 dark:text-primary-400">
      {subtitle}
    </p>
    <ul className="space-y-2">
      {bullets.map((bullet, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base"
        >
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-primary-400 shrink-0" />
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
);

const NarrativeCard = ({ job }: { job: WorkExperience }) => (
  <div className="relative pl-8 pb-6 last:pb-0 border-l-2 border-primary-200 dark:border-primary-800">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400" />

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

    {job.skills && job.skills.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-5">
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

    {job.intro && (
      <p className="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
        {job.intro}
      </p>
    )}

    {job.coreTechnicalContributions && job.coreTechnicalContributions.length > 0 && (
      <div className="mb-6">
        <h4 className="font-headlines text-base font-semibold text-slate-800 dark:text-white mb-3">
          Core Technical Contributions
        </h4>
        <ul className="space-y-3">
          {job.coreTechnicalContributions.map((item, index) => (
            <ContributionItem key={index} {...item} />
          ))}
        </ul>
      </div>
    )}

    {job.keyEnterpriseProjects && job.keyEnterpriseProjects.length > 0 && (
      <div>
        <h4 className="font-headlines text-base font-semibold text-slate-800 dark:text-white mb-3">
          Key Enterprise Projects
        </h4>
        <div className="space-y-4">
          {job.keyEnterpriseProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    )}
  </div>
);

const LegacyTimelineCard = ({ job }: { job: WorkExperience }) => (
  <div className="relative pl-8 pb-6 last:pb-0 border-l-2 border-primary-200 dark:border-primary-800">
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500 dark:bg-primary-400" />

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
      {(job.responsibilities ?? []).map((item, index) => (
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

const TimelineCard = ({ job }: { job: WorkExperience }) =>
  hasNarrativeFormat(job) ? (
    <NarrativeCard job={job} />
  ) : (
    <LegacyTimelineCard job={job} />
  );

export const ExperienceTimeline = ({ data }: ExperienceTimelineProps) => (
  <div className="max-w-4xl mx-auto">
    {data.map((job) => (
      <TimelineCard key={job.id} job={job} />
    ))}
  </div>
);
