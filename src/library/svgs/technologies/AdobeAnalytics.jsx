import PropTypes from 'prop-types';

const AdobeAnalytics = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="none"
      className={className}
    >
      {/* Bar chart */}
      <rect x="2" y="14" width="4" height="8" rx="1" fill="#EB1000" />
      <rect x="8" y="10" width="4" height="12" rx="1" fill="#EB1000" />
      <rect x="14" y="6" width="4" height="16" rx="1" fill="#EB1000" />
      <rect x="20" y="2" width="2" height="20" rx="1" fill="#EB1000" />
      {/* Trend line */}
      <path
        d="M4 12 L10 8 L16 4 L21 2"
        stroke="#EB1000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
};

AdobeAnalytics.propTypes = {
  className: PropTypes.string,
};

export default AdobeAnalytics;

