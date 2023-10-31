import { useState } from "react";
import ThemeIcons from "../svgs/ThemeIcons";

const themeBtns = ["system", "dark", "light"];

const ThemeBtn = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <div className="group absolute right-5 top-5 xl:right-10 xl:top-7 w-11 hover:w-40 h-11 xl:w-12 xl:h-12 rounded-full bg-slate-700/70 flex justify-center items-center gap-x-5 transition-all duration-300">
      {themeBtns.map((theme, i) => (
        <button
          key={i}
          className={`${
            currentTheme !== theme
              ? "opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:relative"
              : ""
          } w-6 h-6 xl:w-[26px] xl:h-[26px] text-white hover:text-slate-200`}
          onClick={() => setCurrentTheme(theme)}
        >
          <ThemeIcons type={theme} />
        </button>
      ))}
    </div>
  );
};

export default ThemeBtn;
