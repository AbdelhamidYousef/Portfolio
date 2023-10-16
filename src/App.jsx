import { useState, useEffect, useRef } from "react";
// Assets
import Sidebar from "./ui/layouts/sidebar/Sidebar";
import Section from "./ui/shared/Section";
import SectionTitle from "./ui/shared/SectionTitle";
import Skills from "./ui/layouts/skills/Skills";
import Projects from "./ui/layouts/projects/Projects";
import ProfilePic from "./ui/layouts/sidebar/ProfilePic";
import Nav from "./ui/layouts/sidebar/Nav";
import Socials from "./ui/shared/Socials";
import AboutText from "./ui/layouts/about/AboutText";
import Techs from "./ui/layouts/about/Techs";
import Download from "./ui/layouts/contact/Download";
import Main from "./ui/layouts/Main";
import SidebarToggleBtn from "./ui/layouts/mainBtns/SidebarToggleBtn";
import ToTopBtn from "./ui/layouts/mainBtns/ToTopBtn";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef([]);

  // Intersection Observer
  useEffect(() => {
    // Callback Function
    const intersectionHandler = ([entry]) => {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    };

    // Options
    const options = {
      threshold: 0.5,
    };

    // Observer
    const observer = new IntersectionObserver(intersectionHandler, options);

    // Observing Sections
    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });
  }, [sectionRefs]);

  const toggleSidebar = () =>
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);

  return (
    <div className="flex overflow-hidden">
      <Sidebar isSidebarOpen={isSidebarOpen}>
        <ProfilePic />
        <Nav activeSection={activeSection} toggleSidebar={toggleSidebar} />
        <Socials
          containerClasses="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-5"
          elementClasses="w-7 h-7 text-gray-50 hover:text-primary-200 cursor-help focus-within:drop-shadow-[0_0_10px_#fff]"
        />
      </Sidebar>

      <Main isSidebarOpen={isSidebarOpen}>
        {/* About/Hero Section */}
        <Section
          addRef={(el) => sectionRefs.current.push(el)}
          id="about"
          classes="min-h-[40rem] h-screen grid content-center text-center xs:text-left animate-slideLeft"
        >
          <AboutText />
          <Techs />
        </Section>

        {/* Skills Section */}
        <Section
          addRef={(el) => sectionRefs.current.push(el)}
          id="skills"
          classes=""
        >
          <SectionTitle classes="lg:!mb-10 !text-center xl:!text-left">
            Skills
          </SectionTitle>
          <Skills />
        </Section>

        {/* Projects Section */}
        <Section addRef={(el) => sectionRefs.current.push(el)} id="projects">
          <SectionTitle>Projects</SectionTitle>
          <Projects />
        </Section>

        {/* Contact Section */}
        <Section
          addRef={(el) => sectionRefs.current.push(el)}
          id="contact"
          classes="!py-10 flex flex-col items-center gap-y-7 xl:flex-row xl:justify-between animate-slideLeft bg-inherit relative z-[11]"
        >
          <SectionTitle
            initialStyle={false}
            classes="font-bold text-3xl text-slate-600 hover:text-primary-600 uppercase transition-all duration-300"
          >
            Get In Touch
          </SectionTitle>

          <Socials
            containerClasses="flex gap-5 xl:gap-14"
            elementClasses="w-8 h-8 text-slate-600 hover:text-primary-600 transition-all duration-300 focus-within:border-b-2 focus-within:border-slate-600 focus-within:border-spacing-2"
          />

          <Download />
        </Section>

        <ToTopBtn />
      </Main>

      <SidebarToggleBtn
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default App;
