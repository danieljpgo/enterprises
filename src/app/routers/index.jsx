import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Navigation from '../common/layout/Navigation';

import Login from '../modules/Auth/Login';
import Home from '../modules/Home';
import List from '../modules/Company/List';
import Details from '../modules/Company/Details';

// @TODO Avaliar o uso de code split, fallback e suspense
// @TODO Mergiar com a master

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route
        key="login"
        path="login"
        element={<Login />}
      />

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
