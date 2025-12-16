import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import AboutText from './AboutText';
import Techs from './Techs';
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
        <Techs content={content.techs} />
      </m.div>
    </Section>
  );
};

About.propTypes = {
  content: PropTypes.object.isRequired,
};

export default About;
