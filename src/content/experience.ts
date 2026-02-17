export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  skills?: string[];
  responsibilities: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title:
      'Certified Adobe Target Engineer | Personalization & Experimentation',
    company: 'Scandiweb',
    period: '2023–present',
    location: 'Latvia - Remote',
    skills: [
      'Adobe Target',
      'A4T',
      'Adobe Tags',
      'JavaScript',
      'Personalization',
      'Experimentation',
      'A/B Testing',
    ],
    responsibilities: [
      'Transitioned from a full-stack role to focus on frontend development, specializing in React and TypeScript.',
      'Developed and maintained React/TypeScript web applications, prioritizing performance, scalability, and user experience.',
      'Built responsive, accessible, and visually appealing interfaces, optimizing for speed and usability.',
      'Integrated frontend with backend services via APIs and GraphQL, ensuring seamless data flow.',
      'Wrote clean, maintainable, and well-documented code, following best practices and modern frontend architecture.',
    ],
  },
];
