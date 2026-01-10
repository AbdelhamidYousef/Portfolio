import type { IconListItem } from '@/library/ui/features/lists';

export const about = {
  // Personal Info
  fullName: 'Abdulhamid Yosef',
  firstName: 'Abdulhamid',
  lastName: 'Yosef',
  title: 'React Developer',
  tagline: 'Building modern web experiences',
  email: 'abdelhamedy33@gmail.com',

  // Bio
  bio: `I'm a passionate Frontend Developer specializing in React and TypeScript, with a strong focus on building performant, accessible, and user- centric interfaces. Known for attention to detail, clean code practices, and translating complex requirements into elegant solutions.`,

  // Resume
  // resumeUrl: '/resumes/react-resume.pdf',

  // Navigation
  navLinks: ['Home', 'About', 'Skills', 'Projects', 'Contact'],

  // Social Links
  socials: [
    {
      id: 1,
      title: 'GitHub',
      iconName: 'github',
      link: 'https://github.com/AbdelhamidYousef',
    },
    {
      id: 2,
      title: 'LinkedIn',
      iconName: 'linkedin',
      link: 'https://linkedin.com/in/abdelhamidy',
    },
    {
      id: 3,
      title: 'Email',
      iconName: 'email',
      link: 'mailto:abdelhamedy33@gmail.com',
    },
  ] satisfies IconListItem[],

  // Stats/Highlights
  stats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '12+' },
  ],
} as const;
