import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Root from './layout/Root';
import Home from './layout/Home';
import Recipe from './layout/Recipe';
import Category from './layout/Category';

const router=createBrowserRouter([
   {
      path:'/',
      element: <Root />,
      children:[
         {
            index:true,
            element: <Home />,   
         },
         {
            path: 'recipe/:id',
            element: <Recipe />,   
         },
         {
            path: 'category/:category',
            element: <Category />,   
         },
      ],
   },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);