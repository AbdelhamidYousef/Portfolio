export const fadeIn = (
  direction,
  type = 'spring',
  duration = 1,
  delay = 0
) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? '50%' : direction === 'right' ? '-50%' : 0,
    y: direction === 'up' ? '50%' : direction === 'down' ? '-50%' : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type, duration, delay },
  },
});
