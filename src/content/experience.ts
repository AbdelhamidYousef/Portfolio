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
    title: 'Full Stack Developer | React Developer',
    company: 'Scandiweb',
    period: '2024–present',
    location: 'Latvia - Remote',
    skills: [
      'TypeScript',
      'React',
      'React Router',
      'React Query',
      'Tailwind CSS',
      'SASS',
    ],
    responsibilities: [
      'Transitioned from a full-stack role to focus on frontend development, specializing in React and TypeScript.',
      'Developed and maintained React/TypeScript web applications, prioritizing performance, scalability, and user experience.',
      'Built responsive, accessible, and visually appealing interfaces, optimizing for speed and usability.',
      'Integrated frontend with backend services via APIs and GraphQL, ensuring seamless data flow.',
      'Wrote clean, maintainable, and well-documented code, following best practices and modern frontend architecture.',
    ],
  },
  {
    id: 2,
    title: 'Personalization & Adobe Target Developer',
    company: '85Sixty',
    period: '2024–Present',
    location: 'USA - Remote',
    skills: ['SASS', 'JavaScript', 'Adobe Target', 'Adobe Analytics'],
    responsibilities: [
      'Setting up A/B, multivariate, and experience targeting activities with Adobe Target.',
      'Setting up ML-based features of Adobe Target including Auto-Target, Automated Personalizations, and Recommendations.',
      'Managing static and dynamic (React-based) websites with vanilla JavaScript custom code from within Target.',
      'Implementing audience-based targeting strategies.',
      'Managing tracking using traditional at.js and more advanced WebSDK.',
      'Creating and managing different treatments to enhance user interactions.',
      'Ensuring seamless delivery of personalized content based on data-driven decisions.',
      'Developing and updating a utility library to automate the generation of the code for different activities.',
    ],
  },
];
