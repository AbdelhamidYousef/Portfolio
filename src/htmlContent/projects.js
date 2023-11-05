import { project1, project2, project3, project4, project5 } from "../assets";

export const projects = [
  {
    id: 1,
    image: project1,
    title: "Wild Oasis",
    description:
      "A web application for a hotel management system, browse the dashboard, cabin/bookings data, check-in guests, and create new ones",
    tech: [
      "React",
      "React Router",
      "React Query",
      "Supabase",
      "Styled Components",
    ],
    githubLink: "https://github.com/AbdelhamidYousef/WildOasis",
    demoLink: "https://wildoasis99.netlify.app/",
  },
  {
    id: 2,
    image: project2,
    title: "Pizza Slice",
    description:
      "A web application to order pizzas, browse the menu, order pizza, and follow order progress easily.",
    tech: ["React", "Redux", "React-Router", "Tailwindcss."],
    githubLink: "https://github.com/AbdelhamidYousef/PizzaSlice",
    demoLink: "https://pizzaslice99.netlify.app/",
  },
  {
    id: 3,
    image: project3,
    title: "Infinity Web",
    description:
      "A landing page for a web design agency. Showcases the company's ability to display outstanding but also simple design using modern CSS techniques",
    tech: ["vanilla JS", "Tailwindcss", "HTML"],
    githubLink: "https://github.com/AbdelhamidYousef/InfinityWeb",
    demoLink: "https://infinityweb99.netlify.app",
  },
  {
    id: 4,
    image: project4,
    title: "Forkify",
    description:
      "A web application to search food recipes, where you are able to change servings and bookmark recipes.",
    tech: ["vanilla JS", "SASS", "HTML", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Forkify",
    demoLink: "https://forkify99.netlify.app",
  },
  {
    id: 5,
    image: project5,
    title: "Natours",
    description:
      "A web page for a traveling company, where you can book different tours for wonderful places.",
    tech: ["vanilla JS", "SASS", "Parcel"],
    githubLink: "https://github.com/AbdelhamidYousef/Natours",
    demoLink: "https://natours99.netlify.app",
  },
];
