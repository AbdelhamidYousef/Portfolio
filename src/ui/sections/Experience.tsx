import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ExperienceTimeline } from '@/library/ui/features/experience';
import type { WorkExperience } from '@/content/experience';

interface ExperienceProps {
  data: WorkExperience[];
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <Section id="experience">
      <motion.div>
        <SectionTitle>Experience</SectionTitle>
      </motion.div>

      <motion.div>
        <ExperienceTimeline data={data} />
      </motion.div>
    </Section>
  );
};
