import Home from 'pages/Home/Home';
import MountDetails from 'pages/MountDetails';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { HOME_ROUTE, MOUNTAIN_ROUTE } from 'constants/routes';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route
          path={`${MOUNTAIN_ROUTE}/:mountainName`}
          element={<MountDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
