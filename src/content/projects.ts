import type { ProjectData } from '@/library/ui/features/lists';

import wildOasis from '@/assets/images/projects/wild-oasis.webp';
import pizzaSlice from '@/assets/images/projects/pizza-slice.webp';
import infinityWeb from '@/assets/images/projects/infinity-web.webp';
import forkify from '@/assets/images/projects/forkify.webp';

export const projects: ProjectData[] = [
  {
    id: 1,
    title: 'Wild Oasis',
    description:
      'A web application for a hotel management system, browse the dashboard, cabin/bookings data, check-in guests, and create new ones.',
    image: wildOasis,
    technologies: [
      { id: 1, title: 'React', iconName: 'react' },
      { id: 2, title: 'React Router', iconName: 'reactrouter' },
      { id: 3, title: 'React Query', iconName: 'reactquery' },
      { id: 4, title: 'Supabase', iconName: 'supabase' },
      { id: 5, title: 'Styled Components', iconName: 'styledcomponents' },
    ],
    githubLink: 'https://github.com/AbdelhamidYousef/WildOasis',
    demoLink: 'https://wildoasis99.netlify.app/',
  },
  {
    id: 2,
    title: 'Pizza Slice',
    description:
      'A web application to order pizzas, browse the menu, order pizza, and follow order progress easily.',
    image: pizzaSlice,
    technologies: [
      { id: 1, title: 'React', iconName: 'react' },
      { id: 2, title: 'Redux', iconName: 'redux' },
      { id: 3, title: 'React Router', iconName: 'reactrouter' },
      { id: 4, title: 'Tailwind', iconName: 'tailwind' },
    ],
    githubLink: 'https://github.com/AbdelhamidYousef/PizzaSlice',
    demoLink: 'https://pizzaslice99.netlify.app/',
  },
  {
    id: 3,
    title: 'Infinity Web',
    description:
      "A landing page for a web design agency. Showcases the company's ability to display outstanding but also simple design using modern CSS techniques.",
    image: infinityWeb,
    technologies: [
      { id: 1, title: 'HTML', iconName: 'html' },
      { id: 2, title: 'Tailwind', iconName: 'tailwind' },
      { id: 3, title: 'JavaScript', iconName: 'javascript' },
    ],
    githubLink: 'https://github.com/AbdelhamidYousef/InfinityWeb',
    demoLink: 'https://infinityweb99.netlify.app',
  },
  {
    id: 4,
    title: 'Forkify',
    description:
      'A web application to search food recipes, where you are able to change servings and bookmark recipes.',
    image: forkify,
    technologies: [
      { id: 1, title: 'JavaScript', iconName: 'javascript' },
      { id: 2, title: 'Sass', iconName: 'sass' },
      { id: 3, title: 'HTML', iconName: 'html' },
    ],
    githubLink: 'https://github.com/AbdelhamidYousef/Forkify',
    demoLink: 'https://forkify99.netlify.app',
  },
];
