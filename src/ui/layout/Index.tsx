import {
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
} from '@/ui/sections';
import { Footer } from './Footer';
import { about } from '@/content';
import { Sidebar } from '@/library/ui/features/sidebar';
import { ThemeButtons } from '@/library/ui/features/theme-button';
import { ScrollToTopButton } from '@/library/ui/shared';
import { ActiveSectionProvider } from '@/library/contexts/activeSection';
import profileImage from '@/assets/images/profile.webp';
import resume from '@/assets/resumes/resume-target-engineer-abdulhamid.pdf';
import { workExperience } from '@/content/experience';

const Index = () => {
  const {
    firstName,
    lastName,
    titles,
    tagline,
    techStack,
    profile,
    stats,
    email,
    socials,
    navLinks,
  } = about;

  return (
    <ActiveSectionProvider>
      {/* Sidebar */}
      <Sidebar
        content={{
          profilePictureUrl: profileImage,
          navLinks,
          socials,
        }}
      />

      {/* Theme Toggle */}
      <ThemeButtons className="fixed right-5 top-5 sm:right-8 sm:top-8" />

      {/* Main Content */}
      <main className="lg:ml-72 overflow-x-hidden">
        <Hero
          firstName={firstName}
          lastName={lastName}
          titles={titles}
          tagline={tagline}
          techStack={techStack}
        />
        <About profile={profile} stats={stats} resumeUrl={resume} />
        <Experience data={workExperience} />
        <Skills />
        <Projects />
        <Contact email={email} />
      </main>

      {/* Scroll to Top */}
      <ScrollToTopButton />

      {/* Footer */}
      <Footer socials={socials} resumeUrl={resume} />
    </ActiveSectionProvider>
  );
};

export default Index;
