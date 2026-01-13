import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ExperienceTimeline } from '@/library/ui/features/experience';
import { fadeIn } from '@/library/utils/motion';
import type { WorkExperience } from '@/content/experience';

interface ExperienceProps {
  data: WorkExperience[];
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <Section id="experience">
      <motion.div variants={fadeIn('up')}>
        <SectionTitle>Experience</SectionTitle>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.1)}>
        <ExperienceTimeline data={data} />
      </motion.div>
    </Section>
  );
};
