import type { ReactNode } from 'react';
import { DownloadArrow } from '@/library/ui/svgs/interface/arrows';

interface DownloadLinkProps {
  href: string;
  longLabel: ReactNode;
  shortLabel?: string;
  className?: string;
}

/**
 * Styled download link with animated arrow
 *
 * @example
 * <DownloadLink href="/resume.pdf" shortLabel="Resume">
 *   Download My Resume
 * </DownloadLink>
 */
export const DownloadLink = ({
  href,
  longLabel,
  shortLabel,
  className = '',
}: DownloadLinkProps) => (
  <a
    href={href}
    download
    className={`
      group flex items-center gap-x-2
      text-slate-600 dark:text-gray-50
      hover:text-primary-600 dark:hover:text-primary-400
      transition-all duration-300
      outline-none focus:underline focus:underline-offset-4
      ${className}
    `}
  >
    <span className="font-bold text-lg xs:text-xl uppercase tracking-tight">
      {shortLabel && <span className="md:hidden">{shortLabel}</span>}
      <span className={shortLabel ? 'hidden md:block' : ''}>{longLabel}</span>
    </span>
    <span className="w-4 h-4 animate-bounce group-hover:animate-bounce-fast">
      <DownloadArrow />
    </span>
  </a>
);
