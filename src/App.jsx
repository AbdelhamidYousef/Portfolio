import { useState, useRef, useEffect } from "react";
// Components
import Skill from "./components/Skill";
import Html from "./svgs/Html";
import Css from "./svgs/Css";
import Javascript from "./svgs/Javascript";
import React from "./svgs/React";
import Tailwind from "./svgs/Tailwind";
import Sass from "./svgs/Sass";
import Git from "./svgs/Git";
import Github from "./svgs/Github";
import Vite from "./svgs/Vite";
import Eslint from "./svgs/Eslint";
// Assets
import profilePic from "./assets/images/profile.webp";
import project1 from "./assets/images/project-1.webp";
import project2 from "./assets/images/project-2.webp";
import project3 from "./assets/images/project-3.webp";
import project4 from "./assets/images/project-4.webp";
import Linkedin from "./svgs/Linkedin";
import Email from "./svgs/Email";

// # HTML Content
// Sidebar
const sidebarLinks = ["about", "skills", "projects", "contact"];
const socials = [
  {
    id: 1,
    title: "Linkedin Account",
    component: <Linkedin />,
    link: "https://www.linkedin.com/in/abdulhamidyousef/",
  },
  {
    id: 2,
    title: "GitHub Account",
    component: <Github />,
    link: "https://github.com/AbdelhamidYousef",
  },
  {
    id: 3,
    title: "E-mail",
    component: <Email />,
    link: "mailto:abdelhamedy33@gmail.com",
  },
];

// About Section
const technologies = [
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

// Skills Section
const skills = {
  "Frontend Programming Languages": [
    {
      id: 1,
      name: "HTML",
      percentage: 98,
      barColor: "#ff4b00",
    },
    {
      id: 2,
      name: "CSS",
      percentage: 95,
      barColor: "#2196f3",
    },
    {
      id: 3,
      name: "JavaScipt",
      percentage: 90,
      barColor: "#f5d400",
    },
  ],
  "Frontend Frameworks / Libraries": [
    {
      id: 1,
      name: "React",
      percentage: 90,
      barColor: "#16addf",
    },
    {
      id: 2,
      name: "Tailwind",
      percentage: 98,
      barColor: "#38bdf8",
    },
    {
      id: 3,
      name: "SASS",
      percentage: 95,
      barColor: "#CF649A",
    },
  ],
  "Version Control & Dev Tools": [
    {
      id: 1,
      name: "Git",
      percentage: 90,
      barColor: "#f14e32",
    },
    {
      id: 2,
      name: "GitHub",
      percentage: 90,
      barColor: "#111",
    },
    {
      id: 3,
      name: "Vite",
      percentage: 95,
      barColor: "#BD34FE",
    },
    {
      id: 4,
      name: "Eslint",
      percentage: 90,
      barColor: "#4B32C3",
    },
  ],
};

// Projects Section
const projects = [
  {
    id: 1,
    image: project1,
    title: "Quick Pizza",
    description:
      "A web application to order pizzas, browse the menu, order pizza, and follow order progress easily.",
    tech: ["React", "Redux", "React-Router", "Tailwindcss."],
    githubLink: "https://github.com/AbdelhamidYousef/QuickPizza",
    demoLink: "https://quickpizza99.netlify.app",
  },
  {
    id: 2,
    image: project2,
    title: "Infinity Web",
    description:
      "A landing page for a web design agency. Showcases the company's ability to display outstanding but also simple design using modern CSS techniques",
    tech: ["vanilla JS", "Tailwindcss", "HTML"],
    githubLink: "https://github.com/AbdelhamidYousef/InfinityWeb",
    demoLink: "https://infinityweb99.netlify.app",
  },
  {
    id: 3,
    image: project3,
    title: "Forkify",
    description:
      "A web application to search food recipes, where you are able to change servings and bookmark recipes.",
    tech: ["vanilla JS", "SASS", "HTML", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Forkify",
    demoLink: "https://forkify99.netlify.app",
  },
  {
    id: 4,
    image: project4,
    title: "Natours",
    description:
      "A web page for a traveling company, where you can book different tours for wonderful places.",
    tech: ["vanilla JS", "SASS", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Natours",
    demoLink: "https://natours99.netlify.app",
  },
];

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sectionRefs = useRef([]);

  // Intersection Observer
  useEffect(() => {
    // Callback Function
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };

    // Options
    const options = {
      threshold: 0.5,
    };

    // Observer
    const observer = new IntersectionObserver(intersectionHandler, options);

    // Observing Sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, [sectionRefs]);

  // Handler Functions
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <header
        className={`${
          isSidebarOpen ? "w-full z-10 sm:w-72" : "w-0 overflow-hidden"
        } fixed left-0 top-0 lg:w-72 h-screen bg-primary-600 transition-all duration-1000`}
      >
        <div
          className={`${
            isSidebarOpen ? "scale-x-100" : "scale-x-0"
          } absolute inset-0 grid place-content-center text-center animate-bounceRight transition-all duration-1000`}
        >
          {/* Profile Picture  */}
          <a
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            title="Profile Picture"
            className={` cursor-pointer mb-8 `}
          >
            <img
              src={profilePic}
              alt="Profile Picture"
              data-title-bottom="Profile Picture"
              className="w-40 h-40 rounded-full border-6 border-white/60 shadow "
            />
          </a>

          {/* Navigation Links */}
          <nav className="">
            <ul>
              {sidebarLinks.map((link, i) => (
                <li
                  key={i}
                  className={`${
                    activeSection === link ? "text-white" : "text-white/50"
                  } hover:text-white mb-4 text-lg font-semibold uppercase text-white`}
                >
                  <a
                    href={`#${link}`}
                    onClick={(e) => scrollToSection(e, link)}
                    className="focus:outline-none focus:border-b-2 focus:border-current focus:border-spacing-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <ul className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-5">
            {socials.map((social) => (
              <li
                key={social.id}
                className="w-7 h-7 drop-shadow-[0_0_3px_#33333340] text-gray-50 cursor-help"
                data-title-top={social.title}
              >
                <a href={social.link} target="_blank" rel="noreferrer">
                  {social.component}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content  */}
      <main
        className={`${
          isSidebarOpen ? "ml-72" : "ml-0"
        } lg:ml-72 w-full bg-gray-100/80 px-5 lg:px-10 transition-all duration-1000 overflow-x-hidden divide-y-2`}
      >
        {/* About Section */}
        <section
          ref={(el) => sectionRefs.current.push(el)}
          id="about"
          className="min-h-[40rem] h-screen grid content-center text-center xs:text-left animate-slideLeft"
        >
          <h1 className="mb-2 xs:mb-0 font-hero font-bold text-5xl xs:text-6xl sm:text-8xl text-slate-700 uppercase">
            Abdulhamid <span className="text-primary-600">Yousef</span>
          </h1>

          <p className="xs:ml-1 mb-3 xs:mb-6 sm:mb-8 lg:mb-10 font-hero font-medium text-lg xs:text-xl sm:text-2xl text-slate-500 uppercase tracking-widest">
            <span className="block xs:inline-block leading-none">
              Frontend Engineer
            </span>
            <span className="hidden xs:inline-block mx-1">|</span>
            <span className="text-primary-600">React Developer</span>
          </p>

          <p className="max-w-6xl xs:ml-1 mb-7 xs:mb-10 sm:mb-12 lg:mb-14 text-sm xs:text-lg text-slate-500/80">
            I specialize in building interactive web applications using React
            and Tailwind / Sass, leveraging their powerful ecosystems to create
            immersive user experiences.
          </p>

          <ul className="xs:ml-1 flex flex-wrap justify-center xs:justify-start gap-x-2 gap-y-3 lg:gap-x-6">
            {technologies.map((tech) => (
              <li
                key={tech.id}
                className="w-6 h-6 xs:w-8 xs:h-8 lg:w-9 lg:h-9 drop-shadow-[0_0_3px_#33333340] cursor-help"
                data-title-bottom={tech.title}
              >
                {tech.component}
              </li>
            ))}
          </ul>
        </section>

        {/* Skills Section */}
        <section
          ref={(el) => sectionRefs.current.push(el)}
          id="skills"
          className="py-20 animate-slideLeft"
        >
          <h2 className="mb-12 font-hero font-bold text-6xl text-slate-700 uppercase tracking-wide text-center sm:text-left">
            Skills
          </h2>

          {/* Mobile & Tablet */}
          <ul className="ml-1 md:hidden flex flex-wrap justify-center sm:justify-start gap-x-5">
            {Object.keys(skills).map((key) =>
              skills[key].map((skill) => (
                <li key={skill.id}>
                  <Skill
                    name={skill.name}
                    percentage={skill.percentage}
                    circleRadius={60}
                    barColor="#eb7647"
                    barWidth={2}
                  />
                </li>
              ))
            )}
          </ul>

          {/* Desktop */}
          <ul className="ml-1 hidden md:block">
            {Object.keys(skills).map((key, i) => (
              <li
                key={i}
                className="grid grid-cols-[18rem_1fr] xl:grid-cols-[22rem_1fr] items-center mb-10"
              >
                <h3 className="font-hero font-semibold text-2xl xl:text-3xl text-slate-500 leading-none">
                  {key}
                </h3>

                <ul className="flex gap-x-5">
                  {skills[key].map((skill) => (
                    <li key={skill.id}>
                      <Skill
                        name={skill.name}
                        percentage={skill.percentage}
                        circleRadius={60}
                        barColor="#eb7647"
                        barWidth={2}
                      />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Projects Section */}
        <section
          ref={(el) => sectionRefs.current.push(el)}
          id="projects"
          className="pt-20 pb-24 animate-slideLeft"
        >
          <h2 className="mb-10 sm:mb-16 font-hero font-bold text-6xl text-slate-700 uppercase tracking-wide text-center sm:text-left">
            Projects
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10">
            {projects.map((project) => (
              <li
                key={project.id}
                className={`${
                  project.id === 4 ? "2xl:col-start-2" : ""
                } group relative rounded-xl overflow-hidden shadow-lg`}
              >
                {/* Project Image  */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {/* Project Content */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] px-10 grid content-center text-center opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
                  {/* Project Title & Description */}
                  <h3 className="-mt-[20%] xs:-mt-[15%] mb-2 font-hero font-semibold text-2xl xs:text-4xl text-gray-100 uppercase tracking-wide z-[1]">
                    {project.title}
                  </h3>
                  <p className="font-medium text-sm xs:text-lg text-gray-100 z-[1]">
                    {project.description}
                  </p>

                  {/* Links */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    title="Code Source"
                    className="absolute right-4 top-4 xs:right-5 xs:top-5 xl:right-6 xl:top-6 z-10 w-6 h-6 xs:w-8 xs:h-8 xl:w-10 xl:h-10 text-white drop-shadow-[0_0_20px_#fff] hover:drop-shadow-[0_0_10px_#fff] transition-all duration-300"
                  >
                    <Github />
                  </a>

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-5 xs:bottom-8 xl:bottom-10 px-6 py-2 xl:px-8 xl:py-3 border-2 border-gray-100 rounded-full font-medium text-md xl:text-lg text-gray-100 hover:border-transparent hover:bg-gray-100 hover:text-slate-700 hover:drop-shadow-[0_0_3px_#fff] transition-all duration-700">
                      Visit Now
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section
          ref={(el) => sectionRefs.current.push(el)}
          id="contact"
          className="h-screen"
        ></section>
      </main>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed left-5 top-5 w-12 h-12 rounded-full bg-slate-700/60 z-20 grid place-content-center hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-slate-700/60 focus:ring-offset-2 transition-all duration-300"
      >
        <span className="w-5 h-5 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "hidden" : "block"}`}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="#f6f6f6"
            className={`${isSidebarOpen ? "block" : "hidden"}`}
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </span>
      </button>

      {/* To Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          isSidebarOpen ? "hidden sm:grid" : ""
        } fixed right-5 bottom-5 sm:right-10 sm:bottom-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-600 z-10 grid place-content-center hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition-all duration-300`}
      >
        <span className="w-5 h-5 sm:w-6 sm:h-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 48 48"
            width="100%"
            height="100%"
          >
            <path
              fill="#fff"
              d="m25.989 46.22 3.661-32.985 4.925 2.88c1.5.874 3.07-1.013 1.943-2.33L25.169.542a1.539 1.539 0 0 0-2.335 0l-11.35 13.243c-1.133 1.317.443 3.203 1.937 2.33l4.931-2.874 3.657 32.979c.256 2.366 3.724 2.367 3.98 0z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default App;
