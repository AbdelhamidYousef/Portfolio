import Html from "../ui/svgs/Html";
import Css from "../ui/svgs/Css";
import Javascript from "../ui/svgs/Javascript";
import React from "../ui/svgs/React";
import ReactRouter from "../ui/svgs/ReactRouter";
import Redux from "../ui/svgs/Redux";
import ReactQuery from "../ui/svgs/ReactQuery";
import ReactHookForm from "../ui/svgs/ReactHookForm";
import Tailwind from "../ui/svgs/Tailwind";
import Sass from "../ui/svgs/Sass";
import StyledComponents from "../ui/svgs/StyledComponents";
import CssModules from "../ui/svgs/CssModules";
import Git from "../ui/svgs/Git";

export const skillsMenu = [
  { label: "All", value: "all" },
  { label: "Core Technologies", value: "core" },
  { label: "React Ecosystem", value: "react" },
  { label: "Dev Enviroment", value: "dev" },
];

export const skills = [
  { id: 1, title: "HTML", component: <Html />, type: "core" },
  { id: 2, title: "CSS", component: <Css />, type: "core" },
  { id: 3, title: "JavaScript", component: <Javascript />, type: "core" },
  { id: 4, title: "React", component: <React />, type: "react" },
  { id: 5, title: "React Router", component: <ReactRouter />, type: "react" },
  { id: 6, title: "Redux/RTK", component: <Redux />, type: "react" },
  { id: 7, title: "React Query", component: <ReactQuery />, type: "react" },
  {
    id: 8,
    title: "React Hook Form",
    component: <ReactHookForm />,
    type: "react",
  },
  { id: 9, title: "Tailwindcss", component: <Tailwind />, type: "react" },
  { id: 10, title: "SASS", component: <Sass />, type: "react" },
  {
    id: 11,
    title: "Styled Components",
    component: <StyledComponents />,
    type: "react",
  },
  { id: 12, title: "CSS Modules", component: <CssModules />, type: "react" },
  { id: 13, title: "Git", component: <Git />, type: "dev" },
];
