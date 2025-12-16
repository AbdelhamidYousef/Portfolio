export default {
  navLinks: ['about', 'skills', 'projects', 'contact'],

  aboutText: {
    firstName: 'Abdulhamid',
    lastName: 'Yosef',
    jobTitles: ['Frontend Engineer', 'React Developer'],
    copy: "I'm a frontend engineer with a deep understanding of frontend technologies, with a focus on the React ecosystem. I'm passionate about building high-quality, user-friendly web applications that create immersive user experiences.",
  },

  socials: [
    {
      id: 1,
      title: 'Linkedin Account',
      iconName: 'Linkedin',
      link: 'https://www.linkedin.com/in/abdelhamidy/',
    },
    {
      id: 2,
      title: 'GitHub Account',
      iconName: 'Github',
      link: 'https://github.com/AbdelhamidYousef',
    },
    {
      id: 3,
      title: 'E-mail',
      iconName: 'Email',
      link: 'mailto:abdelhamedy33@gmail.com',
    },
  ],

  technologies: [
    { id: 1, title: 'HTML', iconName: 'Html' },
    { id: 2, title: 'CSS', iconName: 'Css' },
    { id: 3, title: 'JavaScript', iconName: 'Javascript' },
    { id: 4, title: 'React', iconName: 'React' },
    { id: 5, title: 'React Router', iconName: 'ReactRouter' },
    { id: 6, title: 'Redux/RTK', iconName: 'Redux' },
    { id: 7, title: 'React Query', iconName: 'ReactQuery' },
    { id: 8, title: 'Tailwindcss', iconName: 'Tailwind' },
    { id: 9, title: 'SASS', iconName: 'Sass' },
    { id: 10, title: 'Git', iconName: 'Git' },
    { id: 11, title: 'Vite', iconName: 'Vite' },
  ],

  skills: {
    filters: [
      { label: 'All', value: 'all' },
      { label: 'Core Technologies', value: 'core' },
      { label: 'React Ecosystem', value: 'react' },
      { label: 'Dev Environment', value: 'dev' },
    ],

    list: [
      { id: 1, title: 'HTML', iconName: 'Html', type: 'core' },
      { id: 2, title: 'CSS', iconName: 'Css', type: 'core' },
      { id: 3, title: 'JavaScript', iconName: 'Javascript', type: 'core' },
      { id: 4, title: 'React', iconName: 'React', type: 'react' },
      { id: 5, title: 'React Router', iconName: 'ReactRouter', type: 'react' },
      { id: 6, title: 'Redux/RTK', iconName: 'Redux', type: 'react' },
      { id: 7, title: 'React Query', iconName: 'ReactQuery', type: 'react' },
      {
        id: 8,
        title: 'React Hook Form',
        iconName: 'ReactHookForm',
        type: 'react',
      },
      { id: 9, title: 'Tailwindcss', iconName: 'Tailwind', type: 'react' },
      { id: 10, title: 'SASS', iconName: 'Sass', type: 'react' },
      {
        id: 11,
        title: 'Styled Components',
        iconName: 'StyledComponents',
        type: 'react',
      },
      { id: 12, title: 'CSS Modules', iconName: 'CssModules', type: 'react' },
      { id: 13, title: 'Git', iconName: 'Git', type: 'dev' },
    ],
  },

  projects: [
    {
      id: 1,
      title: 'Wild Oasis',
      imageName: 'wild-oasis',
      copy: 'A web application for a hotel management system, browse the dashboard, cabin/bookings data, check-in guests, and create new ones',
      technologies: [
        { id: 1, title: 'React', iconName: 'React' },
        { id: 2, title: 'React Router', iconName: 'ReactRouter' },
        { id: 3, title: 'React Query', iconName: 'ReactQuery' },
        { id: 4, title: 'Supabase', iconName: 'Supabase' },
        { id: 5, title: 'Styled Components', iconName: 'StyledComponents' },
      ],
      githubLink: 'https://github.com/AbdelhamidYousef/WildOasis',
      demoLink: 'https://wildoasis99.netlify.app/',
    },
    {
      id: 2,
      title: 'Pizza Slice',
      imageName: 'pizza-slice',
      copy: 'A web application to order pizzas, browse the menu, order pizza, and follow order progress easily.',
      technologies: [
        { id: 1, title: 'React', iconName: 'React' },
        { id: 2, title: 'Redux', iconName: 'Redux' },
        { id: 3, title: 'React Router', iconName: 'ReactRouter' },
        { id: 4, title: 'Tailwindcss', iconName: 'Tailwind' },
      ],
      githubLink: 'https://github.com/AbdelhamidYousef/PizzaSlice',
      demoLink: 'https://pizzaslice99.netlify.app/',
    },
    {
      id: 3,
      title: 'Infinity Web',
      imageName: 'infinity-web',
      copy: "A landing page for a web design agency. Showcases the company's ability to display outstanding but also simple design using modern CSS technologiesniques",
      technologies: [
        { id: 3, title: 'HTML', iconName: 'Html' },
        { id: 2, title: 'Tailwindcss', iconName: 'Tailwind' },
        { id: 1, title: 'vanilla JS', iconName: 'Javascript' },
      ],
      githubLink: 'https://github.com/AbdelhamidYousef/InfinityWeb',
      demoLink: 'https://infinityweb99.netlify.app',
    },
    {
      id: 4,
      title: 'Forkify',
      imageName: 'forkify',
      copy: 'A web application to search food recipes, where you are able to change servings and bookmark recipes.',
      technologies: [
        { id: 1, title: 'vanilla JS', iconName: 'Javascript' },
        { id: 2, title: 'SASS', iconName: 'Sass' },
        { id: 3, title: 'HTML', iconName: 'Html' },
        { id: 4, title: 'Parcel', iconName: 'Parcel' },
      ],
      githubLink: 'https://github.com/AbdelhamidYousef/Forkify',
      demoLink: 'https://forkify99.netlify.app',
    },
    // {
    //   id: 5,
    //   title: 'Natours',
    //   imageName: 'natours',
    //   copy: 'A web page for a traveling company, where you can book different tours for wonderful places.',
    //   technologies: [
    //     { id: 1, title: 'vanilla JS', iconName: 'Javascript' },
    //     { id: 2, title: 'SASS', iconName: 'Sass' },
    //     { id: 3, title: 'Parcel', iconName: 'Parcel' },
    //   ],
    //   githubLink: 'https://github.com/AbdelhamidYousef/Natours',
    //   demoLink: 'https://natours99.netlify.app',
    // },
  ],
};
