import { SectionTitle, ProfilePic } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { DownloadLink } from '@/library/ui/shared/DownloadLink';
import { StatsList, type StatsItem } from '@/library/ui/features/lists';
import profileImage from '@/assets/images/profile.webp';
import { fadeIn } from '@/library/framer-motion/variants';
import { motion } from 'framer-motion';

interface AboutProps {
  profile: string;
  stats: readonly StatsItem[];
  resumeUrl: string;
}

export const About = ({ profile, stats, resumeUrl }: AboutProps) => {
  return (
    <Section id="about">
      <motion.div variants={fadeIn('up')}>
        <SectionTitle>About Me</SectionTitle>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center max-w-6xl mx-auto">
        {/* Profile Picture */}
        <motion.div variants={fadeIn('right')}>
          <ProfilePic imageUrl={profileImage} variant="decorated" />
        </motion.div>

        {/* Content */}
        <motion.div variants={fadeIn('left')}>
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
        </motion.div>
      </div>
    </Section>
  );
};
