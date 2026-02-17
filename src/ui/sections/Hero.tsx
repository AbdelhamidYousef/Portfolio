import {
  RubberChars,
  BackgroundBlobs,
  ScrollIndicator,
  TrackedSection,
} from '@/library/ui/shared';
import { Button } from '@/library/ui/shared/Button';

interface HeroProps {
  firstName: string;
  lastName: string;
  titles: readonly [string, string];
  tagline: string;
  techStack: string;
}

export const Hero = ({
  firstName,
  lastName,
  titles,
  tagline,
  techStack,
}: HeroProps) => {
  return (
    <TrackedSection
      id="home"
      className="relative min-h-dvh flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <BackgroundBlobs />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <p className="mb-4 text-lg sm:text-xl text-primary-600 dark:text-primary-400 font-medium tracking-wide animate-slide-up-md">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="mb-4 font-headlines font-bold text-4xl xs:text-5xl sm:text-7xl md:text-8xl uppercase tracking-wide animate-slide-up-md [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards] flex flex-wrap justify-center gap-1 md:gap-3">
          <span className="text-slate-700 dark:text-gray-50">
            <RubberChars>{firstName}</RubberChars>
          </span>{' '}
          <span className="text-primary-600 dark:text-primary-400">
            <RubberChars>{lastName}</RubberChars>
          </span>
        </h1>

        {/* Title - Split with separator like v2 */}
        <p className="mb-6 font-headlines font-medium text-lg sm:text-xl md:text-2xl uppercase tracking-widest animate-slide-up-md [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards] flex flex-col sm:flex-row justify-center gap-x-1 md:gap-x-3">
          <span className="text-slate-600 dark:text-gray-200 leading-none sm:leading-normal">
            {titles[0]}
          </span>
          <span className="hidden sm:block mx-2 sm:mx-1 text-slate-400 dark:text-gray-500">
            |
          </span>
          <span className="text-primary-600 dark:text-primary-400">
            {titles[1]}
          </span>
        </p>

        {/* Tagline & Tech Stack */}
        <div className="mb-10 animate-slide-up-md [animation-delay:300ms] opacity-0 [animation-fill-mode:forwards]">
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            {tagline}
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-400 dark:text-slate-500 tracking-wider">
            {techStack}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up-md [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
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
            href="#experience"
            variant="outline"
            size="lg"
            className="min-w-[180px]"
          >
            See My Work
          </Button>
        </div>
      </div>

      <ScrollIndicator targetId="about" ariaLabel="Scroll to About section" />
    </TrackedSection>
  );
};
