import Html from "../ui/svgs/Html";
import Css from "../ui/svgs/Css";
import Javascript from "../ui/svgs/Javascript";
import React from "../ui/svgs/React";
import Tailwind from "../ui/svgs/Tailwind";
import Sass from "../ui/svgs/Sass";
import Git from "../ui/svgs/Git";
import Github from "../ui/svgs/Github";
import Vite from "../ui/svgs/Vite";
import Eslint from "../ui/svgs/Eslint";

export const aboutText = {
  fname: "Abdulhamid",
  lname: "Yousef",
  jobs: ["Frontend Engineer", "React Developer"],
  description:
    "I specialize in building interactive web applications using React and Tailwind / Sass, leveraging their powerful ecosystems to create immersive user experiences.",
};

export const techns = [
  { id: 1, title: "HTML", component: <Html /> },
  { id: 2, title: "CSS", component: <Css /> },
  { id: 3, title: "JavaScript", component: <Javascript /> },
  { id: 4, title: "React", component: <React /> },
  { id: 5, title: "Tailwindcss", component: <Tailwind /> },
  { id: 6, title: "SASS", component: <Sass /> },
  { id: 7, title: "Git", component: <Git /> },
  { id: 8, title: "GitHub", component: <Github /> },
  { id: 9, title: "Vite", component: <Vite /> },
  { id: 10, title: "Eslint", component: <Eslint /> },
];
