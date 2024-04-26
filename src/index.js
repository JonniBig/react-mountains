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
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeContextProvider>
          <PrismicProvider client={client}>
            <App />
          </PrismicProvider>
        </ThemeContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
