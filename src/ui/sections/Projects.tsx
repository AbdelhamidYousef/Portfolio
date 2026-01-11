import { SectionTitle, AnimateOnScroll } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { ProjectCardList } from '@/library/ui/features/lists';
import { projects } from '@/content/projects';

export const Projects = () => (
  <Section id="projects" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
    <AnimateOnScroll animation="slide-up-md">
      <SectionTitle>Personal Projects</SectionTitle>
    </AnimateOnScroll>

    <AnimateOnScroll animation="slide-up-md" delay={150}>
      <ProjectCardList data={projects} containerClasses="max-w-6xl mx-auto" />
    </AnimateOnScroll>
  </Section>
);
