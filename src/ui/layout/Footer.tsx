import { IconList, type IconListItem } from '@/library/ui/features/lists';
import { DownloadLink } from '@/library/ui/shared';

interface FooterProps {
  socials: readonly IconListItem[];
  resumeUrl?: string;
}

export const Footer = ({ socials, resumeUrl }: FooterProps) => (
  <footer className="relative bg-slate-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 lg:ml-72 z-footer">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Get in Touch */}
        <h3 className="font-headlines font-bold text-3xl tracking-widest dark:text-gray-100 uppercase">
          Get in Touch
        </h3>

        {/* Center: Social Icons */}
        <IconList
          content={socials}
          containerClasses="gap-6"
          itemClasses=" text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors"
          iconClasses="w-5 lg:w-6 h-5 lg:h-6 fill-current"
        />

        {/* Right: Download Resume */}
        {resumeUrl && (
          <DownloadLink
            href={resumeUrl}
            longLabel="Download My Resume"
            shortLabel="Resume"
          />
        )}
      </div>
    </div>
  </footer>
);
