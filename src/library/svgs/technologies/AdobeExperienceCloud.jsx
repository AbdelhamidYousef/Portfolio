import PropTypes from 'prop-types';

const AdobeExperienceCloud = ({ className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 256 256"
      viewBox="0 0 256 256"
      width="100%"
      height="100%"
      className={className}
    >
      <path
        fill="#fa0f00"
        d="M50.5,12h155C229,12,248,31,248,54.5v147c0,23.5-19,42.5-42.5,42.5h-155C27,244,8,225,8,201.5v-147C8,31,27,12,50.5,12z"
      />
      <path
        fill="#fff"
        d="M194.6,187h-28.5c-2.5,0-4.8-1.4-5.8-3.8l-30.9-72.4c-0.2-0.7-1-1.1-1.7-0.9c-0.4,0.1-0.8,0.5-0.9,0.9l-19.3,45.9c-0.4,0.8,0,1.8,0.9,2.1c0.2,0.1,0.4,0.1,0.6,0.1h21.2c1.3,0,2.5,0.8,3,2l9.3,20.7c0.8,1.9-0.1,4.2-2,5c-0.5,0.2-1,0.3-1.5,0.3H61.7c-1.9,0-3.5-1.6-3.5-3.5c0-0.5,0.1-0.9,0.3-1.4l49.1-116.9c1-2.5,3.5-4.2,6.2-4.1h28.3c2.7,0,5.2,1.6,6.2,4.1L197.8,182c0.8,1.8-0.1,3.9-1.8,4.6C195.5,186.8,195.1,186.9,194.6,187z"
      />
    </svg>
  );
};

AdobeExperienceCloud.propTypes = {
  className: PropTypes.string,
};

export default AdobeExperienceCloud;
