import { Hero, About, Skills, Projects, Contact } from '@/ui/sections';
import { about } from '@/content';
import { Sidebar } from '@/library/ui/features/sidebar';
import { ThemeButtons } from '@/library/ui/features/theme-button';
import { ScrollToTopButton } from '@/library/ui/shared';
import profileImage from '@/assets/images/profile.webp';
import resume from '@/assets/resumes/react-resume.pdf';

const Index = () => {
  const { fullName, title, tagline, profile, stats, email, socials, navLinks } =
    about;

  return (
    <>
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
      <main className="lg:ml-72">
        <Hero fullName={fullName} title={title} tagline={tagline} />
        <About profile={profile} stats={stats} resumeUrl={resume} />
        <Skills />
        <Projects />
        <Contact email={email} socials={socials} />
      </main>

      {/* Scroll to Top */}
      <ScrollToTopButton />
    </>
  );
};

export default Index;
