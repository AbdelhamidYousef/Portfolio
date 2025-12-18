import DownloadArrow from '../../../library/svgs/DownloadArrow';
import { resume } from '../../../assets';

const Download = () => {
  return (
    <a
      href={resume}
      download
      className="group text-slate-600 flex items-center gap-x-2 transition-all duration-300 hover:text-primary-600 hover:border-none outline-none focus:border-b-2 focus:border-slate-600 focus:border-spacing-2 dark:text-gray-50 dark:hover:text-primary-400"
    >
      <span className="font-bold text-lg xs:text-xl uppercase tracking-tight">
        <span className="md:hidden">Resume</span>
        <span className="hidden md:block">Download My Resume</span>
      </span>
      <span className="w-4 h-4 animate-bounce group-hover:animate-bounceFast">
        <DownloadArrow />
      </span>
    </a>
  );
};

export default Download;
