import { useState } from "react";
import SidebarBtn from "./SidebarBtn";
import SidebarContent from "./SidebarContent";
import { useKeydown } from "../../../hooks/useKeydown";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () =>
    setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  useKeydown("Escape", closeSidebar);

  return (
    <>
      <SidebarBtn isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <SidebarContent
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default Sidebar;
