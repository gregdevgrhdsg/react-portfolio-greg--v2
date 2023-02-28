import React from 'react';
import ReactDOM from 'react-dom';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './App';
import PortfolioPages  from '../src/pages/PortfolioPages';
import './index.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/portfolio",
        element: <PortfolioPages/>,
      },
  ]);

ReactDOM.render(
    <RouterProvider router={router} />, 
document.getElementById('root')
);
