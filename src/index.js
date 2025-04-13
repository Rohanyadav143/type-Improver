import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter here
import Error404 from './Component/errorPage';
import ListenPage from './Component/listenPage';
import WatchPage from './Component/watchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Define your routes
let allRoutes = [
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
];

root.render(
  <React.StrictMode>
    {/* Wrap the Router with HashRouter */}
    <Router basename="/type-Improver">
      <RouterProvider router={allRoutes} />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
