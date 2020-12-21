import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { fadeInOut } from '../../utils/helpers/animations';
import { Container } from './styles';

const propTypes = {
  /**
   * Specifies whether to display the component.
   */
  show: PropTypes.bool,
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
};

const Backdrop = (props) => {
  const { show, children } = props;

  return (
    <AnimatePresence>
      {show && (
        <Container
          variants={fadeInOut}
          initial="hidden"
          animate="show"
          exit="out"
        >
          {children}

        </Container>
      )}
    </AnimatePresence>
  );
};

Backdrop.propTypes = propTypes;

export default Backdrop;
