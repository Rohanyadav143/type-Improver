import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from './Component/errorPage';
import ListenPage from './Component/listenPage';
import WatchPage from './Component/watchPage';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let allRouts = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/listenPage',
    element:<ListenPage/>
  },
  {
    path:'/watchPage',
    element:<WatchPage/>
  },
  {
    path:'*',
    element:<Error404/>
  }
  ])

root.render(
  <React.StrictMode>
     <Router basename="/type-Improver">
      <RouterProvider router={allRouts} />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
