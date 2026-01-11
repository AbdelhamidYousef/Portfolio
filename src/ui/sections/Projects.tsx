import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ProjectCardList } from '@/library/ui/features/lists';
import { projects } from '@/content/projects';
import { fadeUp, withDelay } from '@/library/framer-motion';

export const Projects = () => (
  <Section id="projects" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
    <motion.div {...fadeUp}>
      <SectionTitle>Personal Projects</SectionTitle>
    </motion.div>

    <motion.div {...withDelay(fadeUp, 150)}>
      <ProjectCardList data={projects} containerClasses="max-w-6xl mx-auto" />
    </motion.div>
  </Section>
);
