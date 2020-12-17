import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Auth from '../modules/Auth';
import Login from '../modules/Auth/Login';
import Home from '../modules/Home';
import List from '../modules/Company/List';
import Details from '../modules/Company/Details';
import Navigation from '../common/layout/Navigation';

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route
        key="auth"
        path="autenticacao"
        element={<Auth />}
      >
        <Route
          key="login"
          path="login"
          element={<Login />}
        />
        <Route
          path="/"
          element={<Navigate to="login" />}
        />
        <Route
          path="/*"
          element={<Navigate to="login" />}
        />
      </Route>

      <Route
        key="navigation"
        element={(
          <PrivateRoute>
            <Navigation />
          </PrivateRoute>
        )}
      >
        <Route
          key="home"
          path="/"
          element={<Home />}
        />
        <Route
          key="company"
          path="empresas"
          element={<List />}
        />
        <Route
          key="details"
          path="empresas/:id"
          element={<Details />}
        />
        <Route
          key="not found"
          path="/*"
          element={<div>Not Found</div>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
