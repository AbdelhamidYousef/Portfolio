import ThemeIcons from "../svgs/ThemeIcons";
import { useTheme } from "../../hooks/useTheme";

const themeBtns = ["system", "dark", "light"];

const ThemeBtn = () => {
  const [currentTheme, setCurrentTheme] = useTheme();

  return (
    <div className="group fixed right-5 top-5 xl:right-10 xl:top-7 z-mainBtns w-11 hover:w-40 h-11 xl:w-12 xl:h-12 rounded-full bg-slate-700/70 flex justify-center items-center gap-x-5 animate-slideLeft transition-all duration-300 focus-within:w-40">
      {themeBtns.map((theme, i) => (
        <button
          key={i}
          className={`${
            currentTheme !== theme
              ? "opacity-0 invisible absolute group-hover:opacity-100 group-hover:visible group-hover:relative"
              : "text-slate-200"
          } w-6 h-6 xl:w-[26px] xl:h-[26px] text-white hover:text-slate-200 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:relative focus:text-slate-300`}
          onClick={() => setCurrentTheme(theme)}
        >
          <ThemeIcons type={theme} />
        </button>
      ))}
    </div>
  );
};

export default ThemeBtn;
