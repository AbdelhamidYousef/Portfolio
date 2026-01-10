export interface Skill {
  id: number;
  title: string;
  iconName: string;
  type: string;
}

export const skillCategories: { value: string | ''; label: string }[] = [
  { value: '', label: 'All Skills' },
  { value: 'core', label: 'Core Technologies' },
  { value: 'css frameworks', label: 'CSS Frameworks' },
  { value: 'react ecosystem', label: 'React Ecosystem' },
  { value: 'tools', label: 'Tools' },
];

export const skills: Skill[] = [
  // Core Technologies
  {
    id: 1,
    title: 'HTML',
    iconName: 'html',
    type: 'core',
  },
  {
    id: 2,
    title: 'CSS',
    iconName: 'css',
    type: 'core',
  },
  {
    id: 3,
    title: 'JavaScript',
    iconName: 'javascript',
    type: 'core',
  },
  {
    id: 4,
    title: 'TypeScript',
    iconName: 'typescript',
    type: 'core',
  },
  // CSS Frameworks
  {
    id: 5,
    title: 'Sass',
    iconName: 'sass',
    type: 'css frameworks',
  },
  {
    id: 6,
    title: 'Tailwind',
    iconName: 'tailwind',
    type: 'css frameworks',
  },
  {
    id: 7,
    title: 'Styled Components',
    iconName: 'styledcomponents',
    type: 'css frameworks',
  },
  {
    id: 8,
    title: 'CSS Modules',
    iconName: 'cssmodules',
    type: 'css frameworks',
  },
  // React Ecosystem
  {
    id: 9,
    title: 'React',
    iconName: 'react',
    type: 'react ecosystem',
  },
  {
    id: 10,
    title: 'React Router',
    iconName: 'reactrouter',
    type: 'react ecosystem',
  },
  {
    id: 11,
    title: 'React Query',
    iconName: 'reactquery',
    type: 'react ecosystem',
  },
  {
    id: 12,
    title: 'Redux',
    iconName: 'redux',
    type: 'react ecosystem',
  },
  {
    id: 13,
    title: 'React Hook Form',
    iconName: 'reacthookform',
    type: 'react ecosystem',
  },
  // Tools
  {
    id: 14,
    title: 'Git',
    iconName: 'git',
    type: 'tools',
  },
  {
    id: 15,
    title: 'Vite',
    iconName: 'vite',
    type: 'tools',
  },
  {
    id: 16,
    title: 'Docker',
    iconName: 'docker',
    type: 'tools',
  },
  {
    id: 17,
    title: 'ESLint',
    iconName: 'eslint',
    type: 'tools',
  },
];
