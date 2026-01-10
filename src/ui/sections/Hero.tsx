import {
  RubberChars,
  BackgroundBlobs,
  ScrollIndicator,
} from '@/library/ui/shared';
import { Button } from '@/library/ui/shared/Button';

interface HeroProps {
  fullName: string;
  title: string;
  tagline: string;
}

export const Hero = ({ fullName, title, tagline }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <BackgroundBlobs />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="mb-4 text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium tracking-wide animate-fade-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="mb-4 font-headlines font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-slate-800 dark:text-white uppercase tracking-tight animate-fade-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
          <RubberChars>{fullName}</RubberChars>
        </h1>

        {/* Title with gradient */}
        <h2 className="mb-6 font-headlines text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-primary-500 via-primary-600 to-primary-700 dark:from-primary-300 dark:via-primary-400 dark:to-primary-500 tracking-wide animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          {title}
        </h2>

        {/* Tagline */}
        <p className="mb-10 text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto animate-fade-up [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          {tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <Button
            as="a"
            href="#contact"
            variant="primary"
            size="lg"
            className="min-w-[180px]"
          >
            Get in Touch
          </Button>
          <Button
            as="a"
            href="#projects"
            variant="outline"
            size="lg"
            className="min-w-[180px]"
          >
            View Projects
          </Button>
        </div>
      </div>

      <ScrollIndicator targetId="about" ariaLabel="Scroll to About section" />
    </section>
  );
};
