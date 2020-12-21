import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalStorageData } from '../../common/utils/helpers/localStorage';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const PrivateRoute = (props) => {
  const { children } = props;

  const headers = getLocalStorageData('headers');

  return (
    <>
      {headers
        ? children
        : <Navigate to="login" />}
    </>
  );
};

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
