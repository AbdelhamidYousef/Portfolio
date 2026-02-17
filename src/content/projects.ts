import type { ProjectData } from '@/library/ui/features/lists';

import laithwaites from '@/assets/images/projects/laithwaites.png';
import alterra from '@/assets/images/projects/alterra.png';

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Direct Wines',
    description:
      'Full page optimization for the DirectWines portfolio (WSJWine, Laithwaites). Deep-funnel experimentation on dynamic, non-VEC flows. Custom integration between Adobe Target and GA4 for analytics parity across global markets.',
    image: laithwaites,
    technologies: [
      { id: 1, title: 'Adobe Target', iconName: 'adobetarget' },
      { id: 2, title: 'Adobe Analytics', iconName: 'adobeanalytics' },
      { id: 4, title: 'JavaScript', iconName: 'javascript' },
      { id: 5, title: 'Sass', iconName: 'sass' },
    ],
  },
  {
    id: 2,
    title: 'Alterra Mountain Company',
    description:
      'High-volume portfolio experimentation across 16 resort domains and the Ikon Pass portal. 100+ complex Adobe Target activities annually, with a shared Adobe Tags library for 100% code consistency and support for extreme seasonal traffic.',
    image: alterra,
    technologies: [
      { id: 1, title: 'Adobe Target', iconName: 'adobetarget' },
      { id: 2, title: 'Adobe Launch / Tags', iconName: 'adobeexperiencecloud' },
      { id: 3, title: 'A4T', iconName: 'adobeanalytics' },
      { id: 4, title: 'JavaScript', iconName: 'javascript' },
      { id: 5, title: 'TypeScript', iconName: 'typescript' },
      { id: 6, title: 'Tailwind', iconName: 'tailwind' },
    ],
  },
];
