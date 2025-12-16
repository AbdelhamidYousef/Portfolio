import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import AboutText from './AboutText';
import Technologies from '../../../library/components/general/technologies/Technologies';
import Section from '../../shared/Section';
import { fadeIn } from '../../../utils/motion';

const About = ({ content }) => {
  return (
    <Section
      id="about"
      className="h-screen min-h-[40rem] box-content grid content-center text-center xs:text-left"
    >
      <m.div variants={fadeIn('right', 'tween', 0.8)}>
        <AboutText content={content.text} />
        <Technologies content={content.technologies} />
      </m.div>
    </Section>
  );
};

About.propTypes = {
  content: PropTypes.object.isRequired,
};

export default About;
