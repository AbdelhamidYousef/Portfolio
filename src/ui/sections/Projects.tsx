import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ProjectCardList } from '@/library/ui/features/lists';
import { projects } from '@/content/projects';

export const Projects = () => (
  <Section id="projects">
    <motion.div>
      <SectionTitle>Personal Projects</SectionTitle>
    </motion.div>

    <ProjectCardList data={projects} containerClasses="max-w-6xl mx-auto" />
  </Section>
);
