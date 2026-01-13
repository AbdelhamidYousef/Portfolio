import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ProjectCardList } from '@/library/ui/features/lists';
import { projects } from '@/content/projects';
import { fadeIn, fade } from '@/library/utils/motion';

export const Projects = () => (
  <Section id="projects">
    <motion.div variants={fadeIn('up')}>
      <SectionTitle>Personal Projects</SectionTitle>
    </motion.div>

    <motion.div variants={fade(0, 0)}>
      <ProjectCardList data={projects} containerClasses="max-w-6xl mx-auto" />
    </motion.div>
  </Section>
);
