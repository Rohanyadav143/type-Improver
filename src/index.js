import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Error404 from './Component/errorPage';
import ListenPage from './Component/listenPage';
import WatchPage from './Component/watchPage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/listenPage',
    element: <ListenPage />
  },
  {
    path: '/watchPage',
    element: <WatchPage />
  },
  {
    path: '*',
    element: <Error404 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
