import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';

// ✅ Import router functions
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';

// ✅ Import all your pages/components
import Error404 from './Component/errorPage';
import ListenPage from './Component/listenPage';
import WatchPage from './Component/watchPage';
import AboutPage from './Component/aboutPage';
import ContactPage from './Component/contactPage';

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
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/contact',
    element: <ContactPage />
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
