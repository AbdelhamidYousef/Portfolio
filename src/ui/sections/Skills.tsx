import { SectionTitle, AnimateOnScroll } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { IconCardList } from '@/library/ui/features/lists';
import { Filter } from '@/library/ui/features/filter-and-search';
import {
  ListFilterProvider,
  useListFilter,
} from '@/library/contexts/listFilter';
import { skills, skillCategories, type Skill } from '@/content/skills';

const SkillsContent = () => {
  const { modifiedList, filter, setFilter } = useListFilter<Skill>();

  return (
    <>
      <AnimateOnScroll animation="slide-up-md">
        <SectionTitle className="mb-8!">Skills</SectionTitle>
      </AnimateOnScroll>

      {/* Filter Buttons */}
      <AnimateOnScroll animation="slide-up-md" delay={100}>
        <Filter
          variant="buttons"
          options={skillCategories}
          value={filter}
          onChange={setFilter}
          className="mb-12"
        />
      </AnimateOnScroll>

      {/* Skills List */}
      <AnimateOnScroll animation="slide-up-md" delay={200}>
        <IconCardList
          data={modifiedList}
          containerClasses="max-w-5xl min-h-[30vh] mx-auto justify-center gap-8 sm:gap-10"
        />
      </AnimateOnScroll>

      {/* No results message */}
      {modifiedList.length === 0 && (
        <p className="text-center text-slate-500 dark:text-slate-400 mt-8">
          No skills found in this category.
        </p>
      )}
    </>
  );
};

export const Skills = () => (
  <Section id="skills" className="py-20 lg:py-28 px-6 md:px-12 lg:px-20">
    <ListFilterProvider originalList={skills} filterKey="type">
      <SkillsContent />
    </ListFilterProvider>
  </Section>
);
