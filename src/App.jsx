import Sidebar from "./ui/layouts/sidebar/Sidebar";
import Main from "./ui/shared/Main";
import About from "./ui/layouts/about/About";
import Skills from "./ui/layouts/skills/Skills";
import Projects from "./ui/layouts/projects/Projects";
import Contact from "./ui/layouts/contact/Contact";
import ToTopBtn from "./ui/shared/ToTopBtn";

import { ActiveSectionProvider } from "./context/ActiveSection";
import Footer from "./ui/layouts/footer/Footer";
import { Toaster } from "react-hot-toast";
import ThemeBtn from "./ui/shared/ThemeBtn";

const App = () => {
  return (
    <>
      <ActiveSectionProvider>
        <Sidebar />

        <Main>
          <ThemeBtn />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <ToTopBtn />
        </Main>

        <Footer />
      </ActiveSectionProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "0.5rem" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          className:
            "max-w-xs px-6 py-4 bg-slate-700 border-2 dark:border-slate-600 rounded-lg shadow-lg text-base text-gray-50",
        }}
      />
    </>
  );
};

export default App;
