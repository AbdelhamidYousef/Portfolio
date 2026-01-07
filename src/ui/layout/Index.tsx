import { useState } from 'react';
import { HamburgerToggleButton } from '@/library/ui/features/menu-buttons';
import { Sidebar } from '@/library/ui/features/sidebar';
import { ThemeButtons } from '@/library/ui/features/theme-button';
import { ProgressCircleList, IconCardList } from '@/library/ui/features/lists';
import {
  ProjectCard,
  type ProjectData,
} from '@/library/ui/features/project-card';
import {
  Button,
  DownloadLink,
  RubberChars,
  ScrollToTopButton,
  Section,
  SectionTitle,
} from '@/library/ui/shared';
import { profilePicture } from '@/assets/index';

const sidebarContent = {
  profilePicUrl: profilePicture,
  navLinks: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
  socials: [
    {
      id: 1,
      title: 'LinkedIn',
      iconName: 'linkedin',
      link: 'https://linkedin.com',
    },
    { id: 2, title: 'GitHub', iconName: 'github', link: 'https://github.com' },
    {
      id: 3,
      title: 'Email',
      iconName: 'email',
      link: 'mailto:hello@example.com',
    },
  ],
};

const sampleProjects: ProjectData[] = [
  {
    id: 1,
    title: 'Portfolio',
    description:
      'A responsive portfolio website built with React and Tailwind CSS.',
    image: profilePicture,
    technologies: [
      { id: 1, title: 'React', iconName: 'react' },
      { id: 2, title: 'TypeScript', iconName: 'typescript' },
    ],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
  },
  {
    id: 2,
    title: 'Dashboard',
    description: 'Analytics dashboard with charts and real-time data.',
    image: profilePicture,
    technologies: [
      { id: 1, title: 'React', iconName: 'react' },
      { id: 2, title: 'Node.js', iconName: 'nodejs' },
    ],
    githubLink: 'https://github.com',
  },
];

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(1);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar content={sidebarContent} />

      {/* Floating Theme Buttons */}
      <span className="fixed right-5 top-5 z-theme-button">
        <ThemeButtons />
      </span>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />

      <main className="p-8 lg:ml-72">
        {/* Menu Buttons Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Menu Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            {/* Toggle button - default */}
            <div className="flex flex-col items-center gap-2">
              <HamburgerToggleButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <span className="text-xs text-gray-500">
                Toggle ({isMenuOpen ? 'open' : 'closed'})
              </span>
            </div>

            {/* Toggle button - rounded variant */}
            <div className="flex flex-col items-center gap-2">
              <HamburgerToggleButton
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="rounded"
              />
              <span className="text-xs text-gray-500">Rounded</span>
            </div>
          </div>
        </div>

        {/* Progress Circle Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Progress Circle List
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <ProgressCircleList
              data={[
                { id: 1, label: 'React', percentage: 90 },
                {
                  id: 2,
                  label: 'TypeScript',
                  percentage: 85,
                  color: '#3178c6',
                },
                { id: 3, label: 'Node.js', percentage: 75, color: '#68a063' },
                { id: 4, label: 'UI Design', percentage: 70, color: '#ff6b9d' },
                { id: 5, label: 'GraphQL', percentage: 60, color: '#e535ab' },
              ]}
              containerClasses="gap-8"
            />
          </div>
        </div>

        {/* Icon Card List Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Icon Card List
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <IconCardList
              data={[
                { id: 1, title: 'React', iconName: 'react' },
                { id: 2, title: 'TypeScript', iconName: 'typescript' },
                { id: 3, title: 'JavaScript', iconName: 'javascript' },
                { id: 4, title: 'Node.js', iconName: 'nodejs' },
                { id: 5, title: 'HTML', iconName: 'html' },
                { id: 6, title: 'Git', iconName: 'git' },
              ]}
            />
          </div>
        </div>

        {/* Rubber Chars Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Rubber Chars
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-4xl font-bold text-slate-700 dark:text-slate-200">
              <RubberChars>Hover over me!</RubberChars>
            </p>
          </div>
        </div>

        {/* Button Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button as="a" href="#" variant="outline">
              Link Button
            </Button>
          </div>
        </div>

        {/* Download Link Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Download Link
          </h2>
          <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <DownloadLink href="#" shortLabel="Resume">
              Download My Resume
            </DownloadLink>
          </div>
        </div>

        {/* Section Component */}
        <Section id="demo-section" className="mb-8 py-8">
          <SectionTitle>Section Component</SectionTitle>
          <p className="text-slate-600 dark:text-slate-300">
            This is wrapped in a Section component with a bottom border.
          </p>
        </Section>

        {/* Project Cards Section */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
            Project Cards
          </h2>
          <ul className="flex flex-col md:flex-row gap-4">
            {sampleProjects.map((project) => (
              <ProjectCard
                key={project.id}
                data={project}
                isActive={activeProject === project.id}
                onClick={() => setActiveProject(project.id)}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Index;
