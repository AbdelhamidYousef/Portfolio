import DownloadArrow from "../../svgs/DownloadArrow";
import resume from "../../../assets/resume/resume.pdf";

const Download = () => {
  return (
    <a
      href={resume}
      download
      className="group text-slate-600 flex items-center gap-x-2 transition-all duration-300 hover:text-primary-600 hover:border-none outline-none focus:border-b-2 focus:border-slate-600 focus:border-spacing-2"
    >
      <span className="font-bold text-lg xs:text-xl uppercase tracking-tight">
        Download My Resume
      </span>
      <span className="w-4 h-4 group-hover:animate-bounce">
        <DownloadArrow />
      </span>
    </a>
  );
};

export default Download;
