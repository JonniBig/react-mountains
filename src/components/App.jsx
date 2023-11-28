import Home from 'pages/Home/Home';
import MountDetails from 'pages/MountDetails';
import NotFound from 'pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mountain/:mountainName" element={<MountDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
