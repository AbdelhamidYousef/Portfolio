export const slideRight = {
  initial: { opacity: 0, x: -300 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, type: "spring", bounce: 0.4 },
  },
};

export const slideRightLight = {
  initial: { opacity: 0, x: -150 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, type: "spring" },
  },
};

export const slideLeftLight = {
  initial: { opacity: 0, x: 150 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.6, type: "spring" },
  },
};

export const skillsAnimation = (index) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  },
});

export const projectsAnimation = (index) => ({
  initial: { opacity: 0, x: -100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, delay: index * 0.5 },
  },
});
