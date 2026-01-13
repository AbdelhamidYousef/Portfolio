/**
 * Smoothly scrolls to a section by its ID
 */
export const scrollToSection = (
  e: React.MouseEvent,
  sectionId: string
): void => {
  e.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};
