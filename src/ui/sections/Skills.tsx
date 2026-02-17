import { motion } from 'framer-motion';
import { SectionTitle } from '@/library/ui/shared';
import { Section } from '@/ui/shared';
import { IconCardList } from '@/library/ui/features/lists';
import { Filter } from '@/library/ui/features/filter-and-search';
import {
  ListFilterProvider,
  useListFilter,
} from '@/library/contexts/listFilter';
import { skills, skillCategories, type Skill } from '@/content/skills';
import { fadeIn } from '@/library/utils/motion';

const SkillsContent = () => {
  const { modifiedList, filter, setFilter } = useListFilter<Skill>();

  return (
    <>
      <motion.div variants={fadeIn('up')}>
        <SectionTitle className="mb-2!">Skills</SectionTitle>
        <p className="text-center sm:text-left text-lg text-slate-500 dark:text-slate-400 mb-8">
          Fullstack & Web Development
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div variants={fadeIn('up', 0.1)}>
        <Filter
          variant="buttons"
          options={skillCategories}
          value={filter}
          onChange={setFilter}
          className="mb-12"
        />
      </motion.div>

      {/* Skills List */}
      <motion.div variants={fadeIn('up', 0.2)}>
        <IconCardList
          data={modifiedList}
          containerClasses="max-w-5xl min-h-[30vh] mx-auto justify-center"
        />
      </motion.div>

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
  <Section id="skills">
    <ListFilterProvider originalList={skills} filterKey="type">
      <SkillsContent />
    </ListFilterProvider>
  </Section>
);
