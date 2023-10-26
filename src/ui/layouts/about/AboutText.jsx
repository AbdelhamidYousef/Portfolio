import { aboutText } from "../../../htmlContent/about";

const AboutText = () => {
  const { fname, lname, jobs, description } = aboutText;

  return (
    <>
      <h1 className="mb-2 xs:mb-1 font-hero font-bold text-5xl xs:text-[3.375rem] sm:text-8xl text-slate-700 uppercase">
        {fname.split("").map((char, i) => (
          <span key={i} className="hover:animate-rubberband">
            {char}
          </span>
        ))}
        <span className="text-primary-600">
          {lname.split("").map((char, i) => (
            <span key={i} className="hover:animate-rubberband">
              {char}
            </span>
          ))}
        </span>
      </h1>

      <p className="xs:ml-1 mb-3 xs:mb-6 sm:mb-8 lg:mb-10 font-hero font-medium text-lg xs:text-xl sm:text-2xl text-slate-500 uppercase tracking-widest">
        <span className="block xs:inline-block leading-none">{jobs[0]}</span>
        <span className="hidden xs:inline-block mx-1">|</span>
        <span className="text-primary-600">{jobs[1]}</span>
      </p>

      <p className="max-w-6xl xs:ml-1 mb-7 xs:mb-10 sm:mb-12 lg:mb-14 text-sm xs:text-lg text-slate-500/80">
        {description}
      </p>
    </>
  );
};

export default AboutText;
