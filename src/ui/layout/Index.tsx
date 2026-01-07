import { useState } from 'react';
import { HamburgerToggleButton } from '@/library/ui/features/menu-buttons';
import { Sidebar } from '@/library/ui/features/sidebar';
import { ThemeButtons } from '@/library/ui/features/theme-button';
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

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar content={sidebarContent} />

      {/* Floating Theme Buttons */}
      <span className="fixed right-5 top-5 z-theme-button">
        <ThemeButtons />
      </span>

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
      </main>
    </div>
  );
};

export default Index;
