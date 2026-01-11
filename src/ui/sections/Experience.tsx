import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ExperienceTimeline } from '@/library/ui/features/experience';
import { fadeUp, withDelay } from '@/library/framer-motion';
import type { WorkExperience } from '@/content/experience';

interface ExperienceProps {
  data: WorkExperience[];
}

export const Experience = ({ data }: ExperienceProps) => {
  return (
    <Section id="experience" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
      <motion.div {...fadeUp}>
        <SectionTitle>Experience</SectionTitle>
      </motion.div>

      <motion.div {...withDelay(fadeUp, 100)}>
        <ExperienceTimeline data={data} />
      </motion.div>
    </Section>
  );
};
