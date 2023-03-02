import React from 'react';
import ReactDOM from 'react-dom';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from './App';
import PortfolioPages  from './pages/PortfolioPages';
import  ProjectA  from './pages/ProjectA';
import  ProjectB  from './pages/ProjectB';
import  ProjectC  from './pages/ProjectC';
import  ProjectD  from './pages/ProjectD';
import  ProjectE  from './pages/ProjectE';
import  ProjectF  from './pages/ProjectF';
import  ProjectG  from './pages/ProjectG';
import  ProjectH  from './pages/ProjectH';
import  ProjectI  from './pages/ProjectI';
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
    {
      path: "/project1",
      element: <ProjectA />,
    },
    {
      path: "/project2",
      element: <ProjectB />,
    },
    {
      path: "/project3",
      element: <ProjectC />,
    },
    {
      path: "/project4",
      element: <ProjectD />,
    },
    {
      path: "/project5",
      element: <ProjectE />,
    },
    {
      path: "/project6",
      element: <ProjectF />,
    },
    {
      path: "/project7",
      element: <ProjectG />,
    },
    {
      path: "/project8",
      element: <ProjectH />,
    },
    {
      path: "/project9",
      element: <ProjectI />,
    },
  ]);

ReactDOM.render(
    <RouterProvider router={router} />, 
document.getElementById('root')
);
