import { SectionTitle, AnimateOnScroll, ProfilePic } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { DownloadLink } from '@/library/ui/shared/DownloadLink';
import { StatsList, type StatsItem } from '@/library/ui/features/lists';
import profileImage from '@/assets/images/profile.webp';

interface AboutProps {
  profile: string;
  stats: readonly StatsItem[];
  resumeUrl: string;
}

export const About = ({ profile, stats, resumeUrl }: AboutProps) => {
  return (
    <Section id="about" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
      <AnimateOnScroll animation="fade-up">
        <SectionTitle>About Me</SectionTitle>
      </AnimateOnScroll>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center max-w-6xl mx-auto">
        {/* Profile Picture */}
        <AnimateOnScroll animation="overshoot-right" delay={100}>
          <ProfilePic imageUrl={profileImage} variant="decorated" />
        </AnimateOnScroll>

        {/* Content */}
        <AnimateOnScroll animation="overshoot-left" delay={200}>
          <div className="text-center lg:text-left">
            {/* Bio */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line mb-8">
              {profile}
            </p>

            {/* Stats */}
            <StatsList stats={stats} className="mb-10" />

            {/* Resume Download */}
            <DownloadLink
              href={resumeUrl}
              shortLabel="Resume"
              longLabel="Download My Resume"
              className="justify-center lg:justify-start"
            />
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};
