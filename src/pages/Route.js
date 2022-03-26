/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
import '../assets/css/App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import RequireAuth from '../assets/context/RequireAuth';
import Car from './Car';
import Layout from './layouts/Layout';
import Dashboard from './Dashboard';
import Login from './Login';
import FormAdd from './Car/Form/Add';
import FormEdit from './Car/Form/Edit';
import NotFound from './NotFound';

function App() {
  return (
    <Routes>
        <Route
          path="/"
          exact
          element={(
            <RequireAuth>
              <Layout title="Dashboard">
                <Dashboard />
              </Layout>
            </RequireAuth>
          )}
        />
      <Route
        path="/car"
          // exact
        element={(
          <RequireAuth>
            <Layout title="Car">
              <Car />
            </Layout>
          </RequireAuth>
          )}
      />
      <Route
        path="/Dashboard"
          // exact
        element={(
          <RequireAuth>
            <Layout title="Dashboard">
              <Dashboard />
            </Layout>
          </RequireAuth>
          )}
      />
      <Route
        path="/car/add"
          // exact
        element={(
          <RequireAuth>
            <Layout title="Car">
              <FormAdd />
            </Layout>
          </RequireAuth>
          )}
      />
      <Route
        path="/car/edit/:id"
          // exact
        element={(
          <RequireAuth>
            <Layout title="Car">
              <FormEdit />
            </Layout>
          </RequireAuth>
          )}
      />
      <Route
        path="*"
          // exact
        element={(
            <NotFound />
          )}
      />
      <Route
        path="/login"
          // exact
        element={(
          <Login />
          )}
      />
    </Routes>
  );
}

export default App;
