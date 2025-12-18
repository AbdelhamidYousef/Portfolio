export default {
  aboutText: {
    firstName: 'Abdulhamid',
    lastName: 'Yosef',
    jobTitles: ['Certified Adobe Target Developer', 'A/B Testing Specialist'],
    copy: "A certified Adobe Target Developer with extensive experience in A/B testing and personalization. I've implemented over 500 A/B tests and personalization experiences, working with Adobe Audience Manager, Analytics for Target (A4T), and Adobe Launch. I combine two years of front-end development experience with data-driven optimization to deliver measurable results.",
  },

  navLinks: ['about', 'skills', 'projects', 'contact'],

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
    {
      id: 1,
      title: 'Adobe Experience Cloud',
      iconName: 'AdobeExperienceCloud',
    },
    { id: 2, title: 'Adobe Target', iconName: 'AdobeTarget' },
    { id: 3, title: 'Adobe Analytics', iconName: 'AdobeAnalytics' },
    { id: 6, title: 'HTML', iconName: 'Html' },
    { id: 5, title: 'CSS', iconName: 'Css' },
    { id: 9, title: 'SASS', iconName: 'Sass' },
    { id: 8, title: 'Tailwindcss', iconName: 'Tailwind' },
    { id: 4, title: 'JavaScript', iconName: 'Javascript' },
    { id: 7, title: 'React', iconName: 'React' },
    { id: 10, title: 'Git', iconName: 'Git' },
  ],

  skills: {
    filter: {
      placeholder: 'Filter by category',
      key: 'type',
      options: [
        { label: 'All', value: 'all' },
        { label: 'Adobe Tools', value: 'adobe' },
        { label: 'Core Technologies', value: 'core' },
        { label: 'React Ecosystem', value: 'react' },
        { label: 'Dev Environment', value: 'dev' },
      ],
    },

    search: {
      placeholder: 'Search skills...',
      key: 'title',
    },

    list: [
      {
        id: 1,
        title: 'Adobe Experience Cloud',
        iconName: 'AdobeExperienceCloud',
        type: 'adobe',
      },
      { id: 2, title: 'Adobe Target', iconName: 'AdobeTarget', type: 'adobe' },
      {
        id: 3,
        title: 'Adobe Analytics',
        iconName: 'AdobeAnalytics',
        type: 'adobe',
      },
      { id: 4, title: 'HTML', iconName: 'Html', type: 'core' },
      { id: 5, title: 'CSS', iconName: 'Css', type: 'core' },
      { id: 6, title: 'SASS', iconName: 'Sass', type: 'react' },
      { id: 7, title: 'Tailwindcss', iconName: 'Tailwind', type: 'react' },
      { id: 8, title: 'JavaScript', iconName: 'Javascript', type: 'core' },
      { id: 9, title: 'React', iconName: 'React', type: 'react' },
      { id: 10, title: 'Git', iconName: 'Git', type: 'dev' },
    ],
  },

  projects: [
    {
      id: 1,
      title: 'Direct Wines Optimizations',
      imageName: 'direct-wines',
      copy: 'A full-page redesign targeted at membership owners, aimed at improving engagement and increasing conversion rates. Delivered and supported over 100 A/B tests and personalization initiatives across five brand websites.',
      technologies: [
        { id: 1, title: 'Adobe Target', iconName: 'AdobeTarget' },
        { id: 2, title: 'Adobe Analytics', iconName: 'AdobeAnalytics' },
        { id: 3, title: 'JavaScript', iconName: 'Javascript' },
        { id: 4, title: 'CSS', iconName: 'Css' },
      ],
    },
    {
      id: 2,
      title: 'Alterra AB Testing',
      imageName: 'alterra',
      copy: 'Planned, implemented, and analyzed A/B tests to optimize user experience and improve conversion performance for enterprise clients through data-driven experimentation.',
      technologies: [
        { id: 1, title: 'Adobe Target', iconName: 'AdobeTarget' },
        { id: 2, title: 'Adobe Analytics', iconName: 'AdobeAnalytics' },
        { id: 3, title: 'JavaScript', iconName: 'Javascript' },
        { id: 4, title: 'SASS', iconName: 'Sass' },
      ],
    },
  ],
};
