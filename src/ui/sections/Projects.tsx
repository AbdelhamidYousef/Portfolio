import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ProjectCardList } from '@/library/ui/features/lists';
import { projects } from '@/content/projects';
import { fadeIn } from '@/library/utils/motion';

export const Projects = () => (
  <Section id="projects">
    <motion.div variants={fadeIn('up')}>
      <SectionTitle>Personal Projects</SectionTitle>
    </motion.div>

    <motion.div variants={fadeIn('up', 0.1)}>
      <ProjectCardList data={projects} containerClasses="max-w-6xl mx-auto" />
    </motion.div>
  </Section>
);
