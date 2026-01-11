import { SectionTitle, AnimateOnScroll } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { workExperience } from '@/content/experience';
import { ExperienceTimeline } from '@/library/ui/features/experience';

export const Experience = () => {
  return (
    <Section id="experience" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
      <AnimateOnScroll animation="slide-up-md">
        <SectionTitle>Experience</SectionTitle>
      </AnimateOnScroll>

      <ExperienceTimeline data={workExperience} />
    </Section>
  );
};
