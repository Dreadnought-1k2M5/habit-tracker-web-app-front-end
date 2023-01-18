import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

//Pages/Components
import App from './App';
import LoginPage from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "login",
    element: <LoginPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
