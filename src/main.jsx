import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {HelmetProvider } from 'react-helmet-async';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './pages/default/Root';
import Error404 from './pages/default/Error404';
import Home from './/pages/Pages/Home';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Portfolios from './pages/Pages/Portfolios';
import ContactUs from './pages/Pages/ContactUs';
import Blog from './pages/Pages/Blog';
import AboutUs from './pages/Pages/AboutUs';
import Careers from './pages/Pages/Careers';
import Project from './pages/Pages/project';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'portfolios',
        element:<Portfolios></Portfolios>
        
      },
      {
        path:'contact',
        element:<ContactUs></ContactUs>
        
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'about',
        element:<AboutUs></AboutUs>
      },
      {
        path:'careers',
        element:<Careers></Careers>
      },

      {
        path:'project/:id',
        element:<Project></Project>
      },
    
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
      <RouterProvider router={router} />
      </HelmetProvider>
      </React.StrictMode>,
)