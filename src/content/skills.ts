export interface Skill {
  id: number;
  title: string;
  iconName: string;
  type: string;
}

export const skillCategories: { value: string; label: string }[] = [
  { value: '', label: 'All Skills' },
  { value: 'web', label: 'Fullstack & Web Development' },
  { value: 'aec', label: 'Adobe Experience Cloud' },
];

export const skills: Skill[] = [
  // Languages
  { id: 1, title: 'HTML5', iconName: 'html', type: 'web' },
  { id: 2, title: 'CSS3 (Tailwind/SASS)', iconName: 'css', type: 'web' },
  { id: 3, title: 'JavaScript (ES6+)', iconName: 'javascript', type: 'web' },
  { id: 4, title: 'TypeScript', iconName: 'typescript', type: 'web' },
  // Frameworks
  { id: 5, title: 'React', iconName: 'react', type: 'web' },
  { id: 6, title: 'Magento', iconName: 'magento', type: 'web' },
  // Adobe Experience Cloud
  { id: 7, title: 'Adobe Target', iconName: 'adobetarget', type: 'aec' },
  { id: 8, title: 'Adobe Launch / Tags', iconName: 'adobeexperiencecloud', type: 'aec' },
  { id: 9, title: 'A4T (Analytics for Target)', iconName: 'adobeanalytics', type: 'aec' },
  { id: 10, title: 'Adobe Audience Manager', iconName: 'adobeaudiencemanager', type: 'aec' },
];
