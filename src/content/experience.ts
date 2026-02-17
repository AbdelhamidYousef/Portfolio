export interface CoreContribution {
  label: string;
  description: string;
}

export interface EnterpriseProject {
  name: string;
  subtitle: string;
  bullets: string[];
}

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  skills?: string[];
  /** Narrative format: intro paragraph */
  intro?: string;
  /** Narrative format: core technical contributions (label + description) */
  coreTechnicalContributions?: CoreContribution[];
  /** Narrative format: key enterprise projects */
  keyEnterpriseProjects?: EnterpriseProject[];
  /** Legacy: flat list of responsibilities (used when intro/contributions not set) */
  responsibilities?: string[];
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title:
      'Certified Adobe Target Engineer | Personalization & Experimentation',
    company: 'Scandiweb',
    period: '2023–present',
    location: 'Latvia - Remote',
    skills: [
      'Adobe Target',
      'A4T',
      'Adobe Tags',
      'JavaScript',
      'Personalization',
      'Experimentation',
      'A/B Testing',
    ],
    intro: `Delivering end-to-end personalization and experimentation using Adobe Target across large enterprise portfolios. Specialized in flicker-free JavaScript delivery, SPA/headless optimization, and advanced data orchestration within the Adobe Experience Cloud.`,
    coreTechnicalContributions: [
      {
        label: 'Workflow Automation',
        description:
          'Architected and developed a proprietary JavaScript utility library delivered via Adobe Tags, reducing activity build time by ~70% and enforcing shared logic across teams.',
      },
      {
        label: 'Performance Engineering',
        description:
          'Designed flicker-free delivery patterns for dynamic SPA environments, preserving Core Web Vitals while running deep-funnel personalization at scale.',
      },
      {
        label: 'Stack Integration',
        description:
          'Led complex data orchestration between Target, Adobe Analytics (A4T) and Google Analytics (GA4), ensuring experiment integrity across analytics stacks.',
      },
    ],
    keyEnterpriseProjects: [
      {
        name: 'Alterra Mountain Company (via 85Sixty)',
        subtitle: 'High-Volume Portfolio Management',
        bullets: [
          'Scope: Led experimentation across 16 high-traffic resort domains and the Ikon Pass portal',
          'Scale: Delivered 100+ complex Adobe Target activities annually, supporting extreme seasonal traffic spikes',
          'Impact: Centralized cross-brand logic into a shared Adobe Tags library, achieving 100% code consistency across the portfolio',
        ],
      },
      {
        name: 'DirectWines Portfolio (WSJWine, Laithwaites)',
        subtitle: 'Global E-commerce Optimization',
        bullets: [
          'Environment: React.js, headless, non-VEC compatible flows',
          'Challenge: Deep-funnel experimentation where standard Target VEC could not operate',
          'Impact: Built a custom integration bridge between Adobe Target and GA4, maintaining analytics parity across global markets',
        ],
      },
      {
        name: 'Christmas Tree World (UK #1 Retailer)',
        subtitle: 'Seasonal CRO & MVT Delivery',
        bullets: [
          'Scope: High-stakes Q4 conversion strategy under extreme seasonal pressure',
          'Execution: Delivered advanced MVT testing on product affinity and user intent',
          'Impact: Performed full technical audits, identifying and resolving critical tracking leaks before peak season',
        ],
      },
    ],
  },
];
