import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'animate.css';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ThemeContextProvider from 'context/ThemeContext';
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <PrismicProvider client={client}>
          <App />
        </PrismicProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
