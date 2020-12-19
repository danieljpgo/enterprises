import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
};
const PrivateRoute = (props) => {
  const { children } = props; // eslint-disable-line 

  const userToken = true;

  return (
    <>
      {userToken
        ? children
        : <Navigate to="login" />}
    </>
  );
};

PrivateRoute.prototype = propTypes;

export default PrivateRoute;
