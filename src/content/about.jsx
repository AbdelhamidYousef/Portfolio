import Html from '../ui/svgs/Html';
import Css from '../ui/svgs/Css';
import Javascript from '../ui/svgs/Javascript';
import React from '../ui/svgs/React';
import Tailwind from '../ui/svgs/Tailwind';
import Sass from '../ui/svgs/Sass';
import Git from '../ui/svgs/Git';
import Vite from '../ui/svgs/Vite';
import ReactRouter from '../ui/svgs/ReactRouter';
import Redux from '../ui/svgs/Redux';
import ReactQuery from '../ui/svgs/ReactQuery';

export const aboutText = {
  fname: 'Abdulhamid',
  lname: 'Yousef',
  jobs: ['Frontend Engineer', 'React Developer'],
  description:
    "I'm a frontend engineer with a deep understanding of frontend technologies, with a focus on the React ecosystem. I'm passionate about building high-quality, user-friendly web applications that create immersive user experiences.",
};

export const techns = [
  { id: 1, title: 'HTML', component: <Html /> },
  { id: 2, title: 'CSS', component: <Css /> },
  { id: 3, title: 'JavaScript', component: <Javascript /> },
  { id: 4, title: 'React', component: <React /> },
  { id: 5, title: 'React Router', component: <ReactRouter /> },
  { id: 6, title: 'Redux/RTK', component: <Redux /> },
  { id: 7, title: 'React Query', component: <ReactQuery /> },
  { id: 8, title: 'Tailwindcss', component: <Tailwind /> },
  { id: 9, title: 'SASS', component: <Sass /> },
  { id: 10, title: 'Git', component: <Git /> },
  { id: 11, title: 'Vite', component: <Vite /> },
];
