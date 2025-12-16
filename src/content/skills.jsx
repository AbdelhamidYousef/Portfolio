import Html from '../library/svgs/technologies/Html';
import Css from '../library/svgs/technologies/Css';
import Javascript from '../library/svgs/technologies/Javascript';
import React from '../library/svgs/technologies/React';
import ReactRouter from '../library/svgs/technologies/ReactRouter';
import Redux from '../library/svgs/technologies/Redux';
import ReactQuery from '../library/svgs/technologies/ReactQuery';
import ReactHookForm from '../library/svgs/technologies/ReactHookForm';
import Tailwind from '../library/svgs/technologies/Tailwind';
import Sass from '../library/svgs/technologies/Sass';
import StyledComponents from '../library/svgs/technologies/StyledComponents';
import CssModules from '../library/svgs/technologies/CssModules';
import Git from '../library/svgs/technologies/Git';

export const skillsMenu = [
  { label: 'All', value: 'all' },
  { label: 'Core Technologies', value: 'core' },
  { label: 'React Ecosystem', value: 'react' },
  { label: 'Dev Enviroment', value: 'dev' },
];

export const skills = [
  { id: 1, title: 'HTML', component: <Html />, type: 'core' },
  { id: 2, title: 'CSS', component: <Css />, type: 'core' },
  { id: 3, title: 'JavaScript', component: <Javascript />, type: 'core' },
  { id: 4, title: 'React', component: <React />, type: 'react' },
  { id: 5, title: 'React Router', component: <ReactRouter />, type: 'react' },
  { id: 6, title: 'Redux/RTK', component: <Redux />, type: 'react' },
  { id: 7, title: 'React Query', component: <ReactQuery />, type: 'react' },
  {
    id: 8,
    title: 'React Hook Form',
    component: <ReactHookForm />,
    type: 'react',
  },
  { id: 9, title: 'Tailwindcss', component: <Tailwind />, type: 'react' },
  { id: 10, title: 'SASS', component: <Sass />, type: 'react' },
  {
    id: 11,
    title: 'Styled Components',
    component: <StyledComponents />,
    type: 'react',
  },
  { id: 12, title: 'CSS Modules', component: <CssModules />, type: 'react' },
  { id: 13, title: 'Git', component: <Git />, type: 'dev' },
];
