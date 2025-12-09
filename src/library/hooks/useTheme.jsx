import { useEffect } from "react";
import { useState } from "react";

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(
    () => localStorage.getItem("theme") || systemTheme
  );

  const setTheme = (theme) => {
    if (theme === "system") {
      setCurrentTheme(systemTheme);
      localStorage.removeItem("theme");
      return;
    }

    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (currentTheme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [currentTheme]);

  return [currentTheme, setTheme];
};
