import { Navigate } from 'react-router-dom';

// @TODO adicionar prop types

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

export default PrivateRoute;
