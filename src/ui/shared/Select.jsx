import { PropTypes } from "prop-types";
import { useState } from "react";
import ArrowHead from "../svgs/ArrowHead";
import { useKeydown } from "../../hooks/useKeydown";
import { useClickOutside } from "../../hooks/useClickOutside";

const Select = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterLabel, setFilterLabel] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const closeMenu = () => setIsOpen(false);

  useClickOutside("js-select", closeMenu);
  useKeydown("Escape", closeMenu);

  return (
    <button
      className="js-select relative w-full min-w-[11rem] h-10 flex justify-between items-center outline-none"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <span className="font-semibold text-sm text-gray-600">
        {!filterLabel || filterLabel === options[0].label
          ? "Filter by technology"
          : filterLabel}
      </span>

      <span
        className={`${
          isOpen ? "rotate-180" : "rotate-0"
        } w-5 h-5 text-gray-600 transition-all duration-300`}
      >
        <ArrowHead />
      </span>

      <ul
        className={`${
          isOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-0"
        } absolute top-[120%] z-selectMenu w-full px-5 py-7 bg-white rounded-xl shadow-lg grid gap-y-6 overflow-auto transition-all duration-300 origin-top`}
      >
        {options.map((option, i) => (
          <li
            key={i}
            className="font-medium text-sm text-gray-500 tracking-wide cursor-pointer select-none transition-all duration-300 hover:text-primary-600"
            onClick={() => {
              setFilterLabel(option.label);
              setFilterValue(option.value);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </button>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequire,
};

export default Select;
