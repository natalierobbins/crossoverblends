import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as App from './App.js'
import './style/main.css'

const router = createBrowserRouter([
  { path: '/', element: <App.Landing /> },
  { path: '/<3/', element: <App.Dashboard /> },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
