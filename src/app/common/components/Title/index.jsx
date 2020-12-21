import PropTypes from 'prop-types';
import { H1, H2 } from './styles';

const propTypes = {
  /**
   * Element to be render inside the component.
   */
  children: PropTypes.node,
  /**
   * Specifies the variants of title.
   */
  variants: PropTypes.oneOf(['base', 'aux', 'contrast']),
};

const Title = (props) => {
  const {
    children,
    variants = 'base',
  } = props;

  if (variants === 'contrast') {
    return (
      <H2 $variants={variants}>
        {children}
      </H2>
    );
  }
  if (variants === 'aux') {
    return (
      <H2 $variants={variants}>
        {children}
      </H2>
    );
  }

  return (
    <H1 $variants={variants}>
      {children}
    </H1>
  );
};

Title.propTypes = propTypes;

export default Title;
