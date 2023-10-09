import { PropTypes } from "prop-types";
import { socials } from "../../htmlContent/socials";

const Socials = ({ containerClasses, elementClasses }) => {
  return (
    <ul className={`${containerClasses}`}>
      {socials.map((social) => (
        <li
          key={social.id}
          className={`${elementClasses}`}
          data-title-top={social.title}
        >
          <a
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="focus:outline-none"
          >
            {social.component}
          </a>
        </li>
      ))}
    </ul>
  );
};

Socials.propTypes = {
  containerClasses: PropTypes.string,
  elementClasses: PropTypes.string,
};

export default Socials;
