export default {
  skills: {
    filter: {
      placeholder: 'Filter by technology',
      key: 'type',
      options: [
        { label: 'All', value: 'all' },
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
};
