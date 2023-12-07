import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'animate.css';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
