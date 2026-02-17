import type { IconListItem } from '@/library/ui/features/lists';

export const about = {
  // Personal Info
  fullName: 'Abdulhamid Yosef',
  firstName: 'Abdulhamid',
  lastName: 'Yosef',
  titles: [
    'Certified Adobe Target Engineer',
    'Personalization & Experimentation Expert',
  ] as const,
  tagline: 'Turning data into personalized experiences',
  techStack: 'Adobe Target · A4T · Adobe Tags',
  email: 'abdelhamedy33@gmail.com',

  // Bio
  profile: `Adobe Target Engineer with 3+ years of experience delivering enterprise-scale experimentation and personalization across complex digital ecosystems. Specialized in flicker-free JavaScript delivery, SPA/headless optimization, and advanced data orchestration within the Adobe Experience Cloud.`,

  // Stats/Highlights
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects', value: '3+' },
    { label: 'Technologies', value: '12+' },
  ],

  // Resume
  // resumeUrl: '/resumes/react-resume.pdf',

  // Navigation
  navLinks: ['home', 'about', 'experience', 'skills', 'projects', 'contact'],

  // Social Links
  socials: [
    {
      id: 1,
      title: 'LinkedIn',
      iconName: 'linkedin',
      link: 'https://linkedin.com/in/abdelhamidy',
    },
    {
      id: 2,
      title: 'GitHub',
      iconName: 'github',
      link: 'https://github.com/AbdelhamidYousef',
    },
    {
      id: 3,
      title: 'Email',
      iconName: 'email',
      link: 'mailto:abdelhamedy33@gmail.com',
    },
  ] satisfies IconListItem[],
} as const;
