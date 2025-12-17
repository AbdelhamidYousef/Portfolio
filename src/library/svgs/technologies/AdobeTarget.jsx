import PropTypes from 'prop-types';

const AdobeTarget = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      className={className}
    >
      {/* Outer ring */}
      <circle cx="12" cy="12" r="10" stroke="#EB1000" strokeWidth="2" />
      {/* Middle ring */}
      <circle cx="12" cy="12" r="6" stroke="#EB1000" strokeWidth="2" />
      {/* Center dot */}
      <circle cx="12" cy="12" r="2" fill="#EB1000" />
      {/* Crosshair lines */}
      <line x1="12" y1="0" x2="12" y2="4" stroke="#EB1000" strokeWidth="2" />
      <line x1="12" y1="20" x2="12" y2="24" stroke="#EB1000" strokeWidth="2" />
      <line x1="0" y1="12" x2="4" y2="12" stroke="#EB1000" strokeWidth="2" />
      <line x1="20" y1="12" x2="24" y2="12" stroke="#EB1000" strokeWidth="2" />
    </svg>
  );
};

AdobeTarget.propTypes = {
  className: PropTypes.string,
};

export default AdobeTarget;

