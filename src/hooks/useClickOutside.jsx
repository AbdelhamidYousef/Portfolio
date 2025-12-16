export const useClickOutside = (className, handler) => {
  const callback = (e) => {
    if (!e.target.closest(`.${className}`)) handler();
  };

  document.addEventListener('click', callback);
  return () => document.removeEventListener('click', callback);
};
